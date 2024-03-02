import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, HStack, Heading, Link, ListItem, SimpleGrid, Spacer, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Footer } from '../components/Footer';

const CCPaths = () => {
    return (
        <Box>
            <Header />
            <VStack h='80vh' justifyContent={'center'} fontFamily={'Poppins'}>
                <Container textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>
                    Você sabia que fazer computação pode te levar a várias áreas de atuação diferentes?
                </Container>
                <Container pt={'2rem'} pb={10} textAlign={'justify'} fontSize={'xl'} fontWeight={'500'}>
                    É comum chegar no curso com a ideia de seguir unicamente a carreira de programação ou engenharia de software, mas vou te mostrar aqui que, na realidade, o curso de Ciência da Computação na UFCG pode te apresentar a um universo de possibilidades, até mesmo pra quem não gosta de programar!
                </Container>
                <Link href={'#trilhas-spec'}><MagnifyingGlass size={40}/></Link>
            </VStack>
            <VStack id={'trilhas-spec'} fontFamily={'Poppins'} mb={'4rem'}>
                <HStack width={'100%'} justifyContent={'center'} pt={'4rem'}>
                    <SimpleGrid spacing={4} templateColumns='repeat(2, minmax(40%, 1fr))' px='2rem'>
                        <Card bg={'#FCE4D8'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Programação </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Programadores são solucionadores de problemas por excelência, identificando e corrigindo bugs, otimizando o desempenho do software e implementando soluções criativas para desafios técnicos.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <HStack>
                                    <UnorderedList>
                                        <ListItem>Programação 1</ListItem>
                                        <ListItem>Programação 2</ListItem>
                                    </UnorderedList>
                                    <UnorderedList>
                                        <ListItem>Algoritmos Avançados (I-IV)</ListItem>
                                        <ListItem>Programação Web</ListItem>
                                    </UnorderedList>
                                </HStack>

                            </CardFooter>
                        </Card>
                        <Card bg={'#FCE4D8'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Engenharia de Software </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>A carreira de engenharia de software abrange duas principais áreas: frontend e backend. Os engenheiros de frontend concentram-se na criação de interfaces de usuário interativas e atrativas. Já os engenheiros de backend lidam com a parte "invisível" das aplicações, desenvolvendo a lógica, construção de servidores e APIs. Ambos os trabalham em conjunto para criar software funcional, escalável e eficiente.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <HStack>
                                    <UnorderedList>
                                        <ListItem>Projeto de Software</ListItem>
                                        <ListItem>Engenharia de Software</ListItem>
                                    </UnorderedList>
                                    <UnorderedList>
                                        <ListItem>Banco de Dados</ListItem>
                                        <ListItem>Arquitetura de Software</ListItem>
                                    </UnorderedList>
                                </HStack>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'>Ciência de Dados</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <Container>Ciência de Dados (Descritiva, Preditiva), Visualização de Dados, Processamento de Linguagem Natural, Sistemas de Apoio à Decisão</Container>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Desenvolvimento de IA </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <Container>Inteligência Artificial, Redes Neurais, Processamento de Linguagem Natural</Container>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'>Análise de Qualidade (QA)</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <Container>Verificação e Validação de Software, Engenharia de Software</Container>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Desenvolvimento Web </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Segurança da Informação </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <Container>Administração e Segurança de Sistemas</Container>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Infraestrutura </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                                <Container>Provisionamento e Operações de Infraestrutura, Redes, Projeto de Redes</Container>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Experiência do Usuário </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Sistemas Embarcados </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text>Principais Disciplinas Relacionadas:</Text>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </HStack>
            </VStack>
            <Footer />
        </Box>

    )
}

export default CCPaths;