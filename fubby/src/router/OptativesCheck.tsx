import { Box, Button, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { FileArrowUp } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Document, pdfjs } from 'react-pdf';
import { Footer } from "../components/Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OptativesCheck = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<number[]>([]);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const extractTextFromPdf = async () => {
        if (!selectedFile) {
            alert('Por favor, selecione um arquivo PDF.');
            return;
        }

        let extractedText = '';

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
            try {
                const pageText = await getPageText(pageNumber);
                extractedText += pageText + '\n';
            } catch (error) {
                console.error('Erro ao extrair texto da página:', error);
            }
        }

        setText(extractedText);
    };

    const handleOptativesSituation = async () => {
        try {
            await extractTextFromPdf();
        } catch (err) {
            console.log(err)
        } finally {
            if (text !== '') {
                const original = text.split("\n");
                const optIndex = original.indexOf("Optativas");
                const necessaryCredits = parseInt(original[optIndex + 8])
                const optCredits = parseInt(original[optIndex + 10])
                const result = calculateOptatives(necessaryCredits, optCredits)
                console.log("aqui o resultado: " + result);
            }
        }
    }

    useEffect(() => {
        if (text !== '') {
            handleOptativesSituation();
        }
    }, [text]);

    const calculateOptatives = (necessary: number, credits: number) => {
        let results: number[] = [];
        if (necessary <= credits) {
            results = [0, 0];
        } else {
            const resultMaxCredits = calculateMaxCredits(necessary, credits);
            const resultMinCredits = calculateMinCredits(necessary, credits);
            results = [resultMaxCredits, resultMinCredits];
        }
        setAnalysisResult(results);
        console.log(results);
        return results;
    }

    const calculateMaxCredits = (necessaryCredits: number, credits: number) => {
        const creditsLeft = necessaryCredits - credits;
        const optsCreditsBased = Math.ceil(creditsLeft / 4);
        return optsCreditsBased;
    }

    const calculateMinCredits = (necessaryCredits: number, credits: number) => {
        const creditsLeft = necessaryCredits - credits;
        const optsCreditsBased = Math.ceil(creditsLeft / 2);
        return optsCreditsBased;
    }

    const getPageText = async (pageNumber: number): Promise<string> => {
        try {
            if (!selectedFile) {
                throw new Error('Nenhum arquivo selecionado.');
            }

            const fileDataUrl = URL.createObjectURL(selectedFile);
            const doc = await pdfjs.getDocument(fileDataUrl).promise;
            const page = await doc.getPage(pageNumber);
            const pageTextItems = await page.getTextContent();
            return pageTextItems.items.map(item => item.str).join('\n');
        } catch (error) {
            throw new Error(`Erro ao extrair texto da página ${pageNumber}: ${error}`);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }

    };

    const handleUploadButton = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <Box >
            <Box h={'100vh'}>
                <Header />
                <Box justifyContent={'center'} textAlign={'center'} >
                    <Heading fontFamily={'Maven Pro'} mt={'2rem'}>Análise de Optativas</Heading>
                    <Text fontFamily={'Poppins'} pt={'2rem'} fontSize={'lg'}>Faça upload do seu arquivo de histórico retirado diretamente do Controle Acadêmico</Text>
                    <VStack pt={'2rem'}>
                        <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={handleFileChange} ref={fileInputRef} />
                        <FileArrowUp cursor={'pointer'} size={32} onClick={handleUploadButton} />
                        <Text fontFamily={'Poppins'}>.pdf</Text>
                    </VStack>
                    {selectedFile && (
                        <HStack justifyContent={'center'} alignContent={'center'} mt={5}>
                            <Text fontFamily={'Maven Pro'}>{selectedFile.name}</Text>
                            <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}></Document>
                            <Button fontFamily={'Maven Pro'} colorScheme="blue" onClick={handleOptativesSituation}>Enviar</Button>
                        </HStack>
                    )}
                </Box>
                {text !== '' && (
                    <Flex fontFamily={'Poppins'} direction={'column'} ml={'24%'} mt={'4rem'}>
                        <Text fontSize={'2xl'} fontWeight={'400'} pb={7}>Resultados</Text>
                        <Text fontWeight={'400'} textAlign={'justify'} width={'70%'}>Você ainda precisa pagar {analysisResult[0]} optativas de 4 créditos ou então {analysisResult[1]} optativas de 2 créditos, como por exemplo, práticas de ensino em diferentes disciplinas.</Text>
                    </Flex>
                )}
            </Box>
            <Footer />
        </Box>
    );

}

export default OptativesCheck;