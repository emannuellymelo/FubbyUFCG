import { Box, Container, Heading, VStack, Text, Button, Flex, HStack, Spinner } from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Comment } from "../components/Comment";
import { ChatCircleText } from "@phosphor-icons/react";
import { AuthContext } from "../context/AuthContext";
import { ReactNode, useContext, useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AddComment } from "../components/AddComments";

export type IComentariosDTO = {
    comentario: string,
    data: string,
}

export type IDisciplinaDTO = {
    nome: string,
    detalhes: string,
    comentarios: IComentariosDTO[],
}

const Details = () => {
    const [data, setData] = useState<IDisciplinaDTO[]>([]);
    const [loading, setLoading] = useState(true);
    let nome = "";
    let detalhes = "";
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const { id } = useParams();
    const cIndex = parseInt(id, 10);

    const handleLogin = () => {
        return navigate('/login');
    }

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "disciplinas"), (snapShot) => {
            let comments: any = [];
            snapShot.docs.forEach((doc) => {
                comments.push({ id: doc.id, ...doc.data() });
            });
            setData(comments);
            setLoading(false);
        }, (error) => {
            console.log(error);
        });
        return () => {
            unsub();
        }
    }, []);

    const handleNome = () => {
        nome = data[cIndex] ? data[cIndex].nome : "";
        return nome;
    }

    const handleDescricao = () => {
        detalhes = data[cIndex] ? data[cIndex].detalhes : "";
        return detalhes;
    }

    return (
        <Box>
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
            <VStack pt={'2rem'}>
                {currentUser ?
                    <Flex direction={'column'}>
                        <Text fontSize={'2xl'} fontWeight={'400'} justifyContent={'flex-start'} pb={7}>Comentários</Text>
                        <AddComment disciplinaId={id ? id.toString() : "-1"} disciplinaNome={nome} disciplinaInfo={detalhes} />
                        
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
                            {data[cIndex] ? data[cIndex].comentarios.slice().reverse().map((comentario, index) => (
                                <Comment key={index} comment={comentario.comentario} date={comentario.data} />
                            )) : ""}
                        </Box>

                    </Flex>
                    :
                    <Button bg={'blue.100'} onClick={handleLogin}>
                        <ChatCircleText size={32} />
                        <Text pl={2}>Entre como seu email @ccc para ter acesso aos comentários</Text>
                    </Button>
                }
            </VStack>


        </Box>
    )
}

export default Details;