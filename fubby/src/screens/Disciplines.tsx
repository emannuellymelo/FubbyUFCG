import { Box, Divider, HStack, IconButton, Input, InputGroup, InputRightElement, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import { LightbulbFilament } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { IDisciplineDTO } from "../services/DisciplinesService/types";
import { getDisciplines } from "../services/DisciplinesService";

const Disciplines = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [disciplines, setDisciplines] = useState<IDisciplineDTO[]>([]);
    const [loading, setLoading] = useState(true);

    const [filterContent, setFilterContent] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isIconId, setIconID] = useState<number>(-1);

    let cadeiras: any = [];

    const handleCheckDiscipline = (cadeira: string) => {
        const cadeiraId = cadeiras.indexOf(cadeira);
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

    useEffect(() => {
        const fetchData = async() => {
            try {
                let data: any = await getDisciplines();
                setDisciplines(data);
                setLoading(false);
            } catch (error) {
                toast({
                    title: 'Banco de Dados indisponível',
                    description: "Esse é um sistema feito com ferramentas gratuitas, o que faz o acesso a dados ser limitado diariamente. Volte aqui amanhã ou tente dar reload para verificar a informação dessa página.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                console.error('Erro ao buscar as disciplinas:', error);
                setLoading(false);
              }
        }
        fetchData();
    }, []);

    disciplines.forEach((discipline) => {
        cadeiras.push(discipline.nome);
    })

    const lowerCaseFilterContent = filterContent.toLowerCase();
    const cadeirasFiltradas = cadeiras.filter((cadeira: string) => cadeira.toLowerCase().includes(lowerCaseFilterContent));

    return (
        <Box fontFamily={'Poppins'} bg={'#EFECFF'}>
            <Header />
            {loading ?
                <HStack justifyContent={'center'} p={10}>
                    <Spinner size="xl" color="blue.500" />
                </HStack>
                :
                <VStack py={'2rem'}>
                    <InputGroup size='md' width={'50%'} justifyContent={'center'} borderColor={'gray.300'}>
                        <Input pr='4.5rem' type='text' placeholder='Buscar disciplina' value={filterContent} onChange={((ev) => setFilterContent(ev.target.value))} />
                        <InputRightElement width='4.5rem' justifyContent={'end'}>
                            <IconButton bg={'#D0C6FF'} _hover={{ boxShadow: 'md', bg: '#9F8BFF' }} aria-label='Search database' icon={<SearchIcon />} />
                        </InputRightElement>
                    </InputGroup>
                </VStack>
            }
            <Box overflowY={'scroll'} h={'70vh'} mb={'4rem'}
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
                {cadeirasFiltradas.map((cadeira:string, index:number) => (
                    <VStack minH={'3rem'} width={'100%'} key={index} onClick={() => handleCheckDiscipline(cadeira)}>
                        <HStack justifyContent={'space-between'} width={'50%'} cursor={'pointer'} >
                            <Text _hover={{ width: '95%', boxShadow: 'md', bg: '#E5DAC5', borderRadius: '4' }} cursor={'pointer'} >{cadeira}</Text>
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