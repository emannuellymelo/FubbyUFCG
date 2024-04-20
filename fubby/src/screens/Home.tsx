import { Image, VStack, Container, Box } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home = () => {
    return (
        <Box bg={'#EFECFF'} minHeight={'100%'}>
            <Header isHome={true} />
            <VStack justifyContent='center' h='87vh' textAlign={'center'}>
                <Image src='./FubbyHP2.png' w={'70%'} overflow={'scroll'}/>
            </VStack>
            <Footer />
        </Box>
    )
}

export default Home;