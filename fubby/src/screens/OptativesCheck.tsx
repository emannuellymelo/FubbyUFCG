import { Box, Button, Flex, HStack, Heading, Link, Text, VStack, useToast } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { FileArrowUp } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Document, pdfjs } from 'react-pdf';
import { Footer } from "../components/Footer";
import { TextItem } from "pdfjs-dist/types/src/display/api";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OptativesCheck = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<number[]>([]);
    const toast = useToast();
    
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const extractTextFromPdf = async () => {
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
        if(Number.isNaN(results[0])|| Number.isNaN(results[1])) {
            toast({
                title: 'Aquivo de Histórico Inválido!',
                description: "Verifique se está enviando um documento de histórico gerado pelo Controle Acadêmico.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        } else {
            setAnalysisResult(results);
            console.log(results);
        }
        
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
            // return pageTextItems.items.map(item => item.str).join('\n');

            const text = pageTextItems.items
            .filter((item): item is TextItem => 'str' in item) // Filtragem segura
            .map((item) => item.str)
            .join('\n'); // Juntar em uma string separada por novas linhas
      
          return text; // Retornar o texto concatenado

        } catch (error) {
            throw new Error(`Erro ao extrair texto da página ${pageNumber}: ${error}`);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setText('');
            setAnalysisResult([]);
        }

    };

    const handleUploadButton = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <Box bg={'#EFECFF'}>
            <Box minH={'100vh'}>
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
                            {text === '' ?
                                <Button fontFamily={'Maven Pro'} colorScheme="blue" onClick={handleOptativesSituation}>Enviar</Button>
                            : analysisResult.length != 0 ? 
                                <Button fontFamily={'Maven Pro'} colorScheme="green">Enviado</Button>
                                : ''  
                            }
                        </HStack>
                    )}
                </Box>
                {text !== '' && analysisResult.length != 0 && (
                    <Flex fontFamily={'Poppins'} direction={'column'} ml={'24%'} mt={'4rem'}>
                        <Text fontSize={'2xl'} fontWeight={'400'} pb={7}>Resultados</Text>
                        <Text fontWeight={'400'} textAlign={'justify'} width={'70%'} pb={7}>Você ainda precisa pagar {analysisResult[0]} optativas de 4 créditos ou então {analysisResult[1]} optativas de 2 créditos, como práticas de ensino em diferentes disciplinas.</Text>
                        <Text fontWeight={'400'} textAlign={'justify'} width={'70%'}>OBS: Lembre-se que no curso é necessário concluir, no mínimo, 4 optativas gerais e 10 optativas específicas. Mais detalhes sobre a grade do curso podem ser consultados no <Link color={'blue.500'} href={'https://drive.google.com/file/d/1BHUAsrnbQNHEy8dWm2N6sb8R4IKwRTOw/view'}>fluxograma oficial.</Link></Text>
                    </Flex>
                )}
            </Box>
            <Footer />
        </Box>
    );

}

export default OptativesCheck;