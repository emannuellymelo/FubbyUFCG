import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

const AreaDoAluno = () => {
    const navigate = useNavigate();

    const handleCheckOptatives = () => {
        return navigate('/area-do-aluno/analise-optativas');
    }

    const handleComplementaryHours = () => {
        return navigate('/area-do-aluno/horas-complementares')
    }

    return (
        <Box>
            <Box justifyContent={'center'} textAlign={'center'} h ={'90vh'}>
                <Header />
                <Heading fontFamily={'Poppins'} mt={'2rem'}>Olá, aluno!</Heading>
                <Container fontFamily={'Poppins'} fontSize={'xl'} pt={'2rem'}>Aqui você poderá interagir comigo e se planejar para suas disciplinas optativas e, também, para efetuar suas horas complementares.</Container>
                <HStack justifyContent={'center'} spacing={'7rem'} alignContent={'center'} height={'12rem'}>
                    <Button _hover={{ boxShadow: 'md', bg: '#FCE4D8', borderRadius: '4' }} fontFamily={'Maven Pro'} onClick={handleCheckOptatives}>Análise de Optativas</Button>
                    <Button _hover={{ boxShadow: 'md', bg: '#FCE4D8', borderRadius: '4' }} fontFamily={'Maven Pro'} onClick={handleComplementaryHours}>Horas Complementares</Button>
                </HStack>
            </Box>
            <Footer />
        </Box>
    );
}

export default AreaDoAluno;