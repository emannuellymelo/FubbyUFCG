import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

const StudentSpace = () => {
    const navigate = useNavigate();

    const handleCheckOptatives = () => {
        return navigate('/area-do-aluno/analise-optativas');
    }

    const handleComplementaryHours = () => {
        return navigate('/area-do-aluno/horas-complementares')
    }

    return (
        <Box>
            <Header />
            <Box justifyContent={'center'} textAlign={'center'} h ={'100vh'} bg={'#EFECFF'}>
                <Heading fontFamily={'Poppins'} pt={'2rem'}>Olá, aluno!</Heading>
                <Container fontFamily={'Poppins'} fontSize={'xl'} pt={'2rem'}>Aqui você poderá interagir comigo e se planejar para suas disciplinas optativas e, também, para efetuar suas horas complementares.</Container>
                <HStack justifyContent={'center'} spacing={{base: '1rem', md:'7rem'}} alignContent={'center'} height={'12rem'}>
                    <Button bg={'#D0C6FF'} _hover={{ boxShadow: 'md', bg: '#9F8BFF', borderRadius: '4' }} fontFamily={'Maven Pro'} onClick={handleCheckOptatives}>Análise de Optativas</Button>
                    <Button bg={'#D0C6FF'} _hover={{ boxShadow: 'md', bg: '#9F8BFF', borderRadius: '4' }} fontFamily={'Maven Pro'} onClick={handleComplementaryHours}>Horas Complementares</Button>
                </HStack>
            </Box>
            <Footer />
        </Box>
    );
}

export default StudentSpace;