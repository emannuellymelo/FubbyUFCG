import { Box, Divider, Flex, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import { LightbulbFilament } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";


const Disciplines = () => {
    const navigate = useNavigate();
    const [filterContent, setFilterContent] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isIconId, setIconID] = useState<number>(-1);

    const handleCheckDiscipline = (cadeiraId: number) => {
        return navigate('/disciplinas/' + cadeiraId.toString());
    }

    const handleMouseOver = (index: number) => {
        setIsMouseOver(true);
        setIconID(index)
    }
    const handleMouseLeave = () => {
        setIsMouseOver(false)
        setIconID(-1)
    }

    const cadeiras = ['Engenharia de Software', 'Banco de Dados', 'Verificação e Validação de Software', 'Inteligência Artificial', 'Grafos', 'Programação 1', 'Programação 2', 'Laboratório de Programação 1', 'Laboratório de Programação 2', 'Algoritmos Avançados (I-IV)', 'Programação Web', 'Projeto de Software', 'Arquitetura de Software', 'Visualização de Dados', 'Processamento de Linguagem Natural', 'Sistemas de Apoio à Decisão', 'Redes Neurais', 'Percepção Computacional', 'Teoria da Computação', 'Compiladores', 'ATAL']

    const lowerCaseFilterContent = filterContent.toLowerCase();
    const cadeirasFiltradas = cadeiras.filter((cadeira) => cadeira.toLowerCase().includes(lowerCaseFilterContent));

    return (
        <Box fontFamily={'Poppins'}>
            <Header />
            <VStack py={'2rem'}>
                <InputGroup size='md' width={'50%'} justifyContent={'center'}>
                    <Input pr='4.5rem' type='text' placeholder='Buscar disciplina' value={filterContent} onChange={((ev) => setFilterContent(ev.target.value))} />
                    <InputRightElement width='4.5rem' justifyContent={'end'}>
                        <IconButton aria-label='Search database' icon={<SearchIcon />} />
                    </InputRightElement>
                </InputGroup>
            </VStack>
            <Box overflowY={'scroll'} maxH={'64vh'} mb={'4rem'}
                css={{
                    "&::-webkit-scrollbar": {
                        width: "8px", // Largura do scroll
                    },
                    "&::-webkit-scrollbar-thumb": {
                        bg: "gray.400", // Cor do polegar do scroll
                        borderRadius: "8px", // Borda do polegar do scroll
                        backgroundColor: 'gray'
                    },
                }}>
                {cadeirasFiltradas.map((cadeira, index) => (
                    <VStack h={'3rem'} width={'100%'} key={index} onClick={() => handleCheckDiscipline(index)} cursor={'pointer'}>
                        <HStack justifyContent={'space-between'} width={'50%'}>
                            <Text _hover={{ width: '95%', boxShadow: 'md', bg: '#FCE4D8', borderRadius: '4' }} cursor={'pointer'} >{cadeira}</Text>
                            {isMouseOver && (isIconId == index) ? (
                                <HStack>
                                    <LightbulbFilament
                                        size={18}
                                        cursor={'pointer'}
                                        color="orange"
                                        onMouseOver={() => handleMouseOver(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                    <Text onMouseLeave={handleMouseLeave} cursor={'pointer'} fontSize={'small'}> Saiba mais </Text>
                                </HStack>
                            ) : (
                                <LightbulbFilament
                                    size={18}
                                    cursor={'pointer'}
                                    onMouseOver={() => handleMouseOver(index)}
                                />
                            )
                            }

                        </HStack>
                        <Divider borderColor={'gray'} width={'50%'} />
                    </VStack>
                ))}
            </Box>
            <Footer />
        </Box>
    );
}

export default Disciplines;