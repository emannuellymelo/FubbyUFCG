import { Box, Container, Heading, VStack, Text, Button, Flex, HStack, Spinner, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Comment } from "../components/Comment";
import { ChatCircleText } from "@phosphor-icons/react";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { AddComment } from "../components/AddComments";
import { signInWithPopup } from "firebase/auth";
import { Footer } from "../components/Footer";
import { IDisciplineDTO } from "../services/DisciplinesService/types";
import { getDisciplines } from "../services/DisciplinesService";
import { PopOver } from "../components/PopOver";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Details = () => {
    const { dispatch } = useContext(AuthContext)
    const [disciplines, setDisciplines] = useState<IDisciplineDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext);
    const { id = '' } = useParams<{ id?: string }>();
    const cIndex = parseInt(id, 10);
    const toast = useToast();
    let nome = "";
    let detalhes = "";
    let dbId = "";

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((data) => {
            const userCredentialEmail = data.user.email;
            if (userCredentialEmail != null) {
                if (userCredentialEmail.endsWith("@ccc.ufcg.edu.br")) {
                    dispatch({ type: "LOGIN", payload: data.user });
                    toast({
                        title: 'Login realizado com sucesso!',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: 'Login não autorizado!',
                        description: 'Utilize um email @ccc para ter acesso aos comentários.',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                }
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data: any = await getDisciplines();
                setDisciplines(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar as disciplinas:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    const handleNome = () => {
        nome = disciplines[cIndex] ? disciplines[cIndex].nome : "";
        return nome;
    }

    const handleDescricao = () => {
        detalhes = disciplines[cIndex] ? disciplines[cIndex].detalhes : "";
        return detalhes;
    }

    const getDBId = () => {
        dbId = disciplines[cIndex] ? disciplines[cIndex].id : "";
        return dbId;
    }

    return (
        <Box bg={'#EFECFF'}>
            <Header />
            {loading ?
                <HStack justifyContent={'center'} p={10}>
                    <Spinner size="xl" color="blue.500" />
                </HStack>
                :
                <VStack fontFamily={'Poppins'} pt={'2rem'}>
                    <Heading>{handleNome()}</Heading>
                    <Container textAlign={'justify'} fontSize={'md'} pt={'1rem'} maxW='container.md'>{handleDescricao()}</Container>
                </VStack>
            }
            {(disciplines.length == 0 && !loading) ?
                <VStack fontFamily={'Poppins'} pt={'2rem'} justifyContent={'center'}>
                    <Heading><WarningTwoIcon color={'orange'}/></Heading>
                    <Text>Banco de Dados indisponível!</Text>
                    <Container textAlign={'justify'} fontSize={'md'} pt={'1rem'} maxW='container.md'>Esse é um sistema feito com ferramentas gratuitas, o que faz o acesso a dados ser limitado diariamente. Volte aqui depois para verificar a informação dessa página.</Container>
                </VStack>:''
            }

            <VStack pt={'2rem'} minH={'80vh'}>
                {currentUser ?
                    <Flex direction={'column'} w={{base:'100%', md:'50%'}}>
                        <HStack alignItems={'top'} w={'100%'} textAlign={'left'}>
                            <Text fontSize={'2xl'} fontWeight={'400'} pb={7}>Comentários</Text>
                            <PopOver title={"Sobre"} description={"Esta seção têm o propósito de proporcionar um ambiente colaborativo entre os alunos, de forma anônima. Espera-se que sejam feitos comentários descritivos e opinativos sobre o conteúdo da cadeira e sobre a metodologia do professor da disciplina. OBS: Para a manutenibilidade desse cenário construtivo e saudável, é utilizado um modelo de machine learning treinado para identificar possíveis comentários tóxicos e evitar a publicação desse conteúdo."} />
                        </HStack>
                        <AddComment disciplinaId={getDBId() ? dbId : "-1"} />
                        <Box overflowY={'scroll'} maxH={'64vh'}
                            css={{
                                "&::-webkit-scrollbar": {
                                    width: "5px", // Largura do scroll
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    bg: "gray.400", // Cor do polegar do scroll
                                    borderRadius: "8px", // Borda do polegar do scroll
                                    backgroundColor: 'gray'
                                },
                            }}>
                            {disciplines[cIndex] ? disciplines[cIndex].comentarios.slice().reverse().map((comentario, index) => (
                                <Comment key={index} comment={comentario.comentario} date={comentario.data} />
                            )) : ""}
                        </Box>
                    </Flex>
                    :

                    <Button bg={'#D0C6FF'} onClick={handleLogin} mt={10} >
                        <ChatCircleText size={32} />
                        <Text pl={2}>Entre com seu email @ccc para ter acesso aos comentários</Text>
                    </Button>
                }
            </VStack>
            <Footer />

        </Box>
    )
}

export default Details;
