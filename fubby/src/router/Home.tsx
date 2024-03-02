import { Flex, Heading, Text, Image, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, VStack, Stack, Container, Box } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home = () => {
    return (
        <Box>
            <Header isHome={true} />
            <VStack justifyContent='center' h='80vh' textAlign={'center'}>
                <Image src='./Fubby.png' />
                <Container fontFamily={'Poppins'} fontWeight={'500'} fontSize={'2xl'} pt='2rem'>
                    Seu suporte para o curso de Ciência da Computação na UFCG (;
                </Container>
            </VStack>
            <Footer />
        </Box>
    )
}

export default Home;