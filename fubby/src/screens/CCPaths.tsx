import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, HStack, Heading, Link, SimpleGrid, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const CCPaths = () => {
    const navigate = useNavigate();

    const handlePath = (id: string) => {
        return navigate("/disciplinas/" + id)
    }

    return (
        <Box bg={'#EFECFF'}>
            <Header />
            <VStack minH='80vh' justifyContent={'center'} fontFamily={'Poppins'}>
                <Container textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>
                    Você sabia que fazer computação pode te levar a várias áreas de atuação diferentes?
                </Container>
                <Container pt={'2rem'} pb={10} textAlign={'justify'} fontSize={'xl'} fontWeight={'500'}>
                    É comum chegar no curso com a ideia de seguir unicamente a carreira de programação ou engenharia de software, mas vou te mostrar aqui que, na realidade, o curso de Ciência da Computação na UFCG pode te apresentar a um universo de possibilidades, até mesmo se você não gosta de programar!
                </Container>
                <Link href={'#trilhas-spec'}><MagnifyingGlass size={40} /></Link>
            </VStack>
            <VStack id={'trilhas-spec'} fontFamily={'Poppins'} mb={'4rem'}>
                <HStack width={'100%'} justifyContent={'center'} pt={'4rem'}>
                    <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(1, minmax(100%, 1fr))', md: 'repeat(2, minmax(40%, 1fr))'}} px='2rem'>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'>Ciência de Dados</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>A ciência de dados é uma área multidisciplinar que combina conhecimentos de estatística, matemática, computação e domínio do contexto em que os dados estão inseridos para extrair insights valiosos que podem contribuir com a tomada de decisões embasadas em evidências sólidas. É uma área em constante evolução e que enfrenta desafios éticos relacionados à privacidade dos dados, preconceitos algorítmicos e segurança cibernética, o que cobra do cientista de dados uma postura responsável e íntegra.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack direction='column'>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('14')}>Ciência de Dados Descritiva</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('8')}>Ciência de Dados Preditiva</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('16')}>Visualização de Dados</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('15')}>Processamento de Linguagem Natural</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('24')}>Sistemas de Apoio à Decisão</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Desenvolvimento de IA </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}> Ao combinar princípios de algoritmos, aprendizado de máquina e processamento de dados, os profissionais de IA criam sistemas capazes de aprender, raciocinar e tomar decisões de maneira autônoma. Esses sistemas têm aplicações em uma variedade de campos, desde assistentes virtuais e carros autônomos até diagnósticos médicos e otimização de processos industriais. O desenvolvimento de IA envolve desafios técnicos complexos, como aprimorar algoritmos de aprendizado de máquina, lidar com grandes conjuntos de dados e garantir a ética e a transparência no uso da tecnologia. </Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('23')}>Reconhecimento de Padrões e Redes Neurais</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('11')}>Percepção Computacional</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('25')}>Inteligência Artificial</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('15')}>Processamento de Linguagem Natural</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Programação </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Programadores são solucionadores de problemas por excelência, identificando e corrigindo bugs, otimizando o desempenho do software e implementando soluções criativas para desafios técnicos.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('26')}>Programação 1</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('27')}>Programação 2</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('12')}>Algoritmos Avançados</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('28')}>Programação Web</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('49')}>EDA</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('50')}>LEDA</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('59')}>Laboratório de Programação I</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('60')}>Laboratório de Programação II</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Engenharia de Software </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>A carreira de engenharia de software abrange duas principais áreas: frontend e backend. Os engenheiros de frontend concentram-se na criação de interfaces de usuário interativas e atrativas. Já os engenheiros de backend lidam com a parte "invisível" das aplicações, desenvolvendo a lógica, construção de servidores e APIs. Ambos trabalham em conjunto para criar software funcional, escalável e eficiente.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                                <Text fontWeight={'bold'}  mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('29')}>Projeto de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('30')}>Engenharia de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('31')}>Banco de Dados</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('36')}>Arquitetura de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('34')}>Projeto em Computação I</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('32')}>Análise de Sistemas</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('49')}>EDA</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('50')}>LEDA</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'>Análise de Qualidade (QA)</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Os profissionais de QA desempenham um papel vital no ciclo de desenvolvimento de software, trabalhando para identificar e corrigir defeitos, garantir a conformidade com os requisitos do cliente e melhorar continuamente a experiência do usuário. Por meio de testes rigorosos, automação de processos e análise de dados, os analistas de QA buscam não apenas encontrar falhas, mas também preveni-las, promovendo uma cultura de qualidade desde as fases iniciais do desenvolvimento.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('13')}>Verificação e Validação de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('30')}>Engenharia de Software</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Desenvolvimento Web </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Combinando habilidades de programação, design e interação do usuário, os desenvolvedores web criam sites e aplicativos que oferecem experiências envolventes e funcionais para os usuários. Desde a criação de interfaces elegantes e responsivas até a implementação de funcionalidades complexas nos bastidores, os desenvolvedores web estão na vanguarda da inovação digital. Além disso, a natureza colaborativa e em constante evolução da web oferece um ambiente propício para aprendizado contínuo e criatividade, permitindo que os profissionais explorem uma ampla gama de tecnologias e ferramentas para alcançar seus objetivos. </Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'}  mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('28')}>Programação para Web</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('29')}>Projeto de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('37')}>Princípios de Desenvolvimento Web</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('30')}>Engenharia de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('63')}>Interface Homem-Máquina</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('34')}>Projeto em Computação I</Button></WrapItem>
                                        
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Segurança da Informação </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}> Pessoas que atuam na segurança da informação desempenham um papel crucial na identificação e mitigação de vulnerabilidades, garantindo a integridade, confidencialidade e disponibilidade das informações em um mundo digital cada vez mais interconectado. Ao adotar uma abordagem proativa, os especialistas em segurança desenvolvem e implementam medidas preventivas, como firewalls, criptografia e sistemas de detecção de intrusos, enquanto também respondem rapidamente a incidentes de segurança e investigam violações em potencial. Com a crescente sofisticação das ameaças cibernéticas, a demanda por profissionais de segurança da informação continua a aumentar, oferecendo aos aspirantes a cientistas da computação a oportunidade de se tornarem defensores da tecnologia e líderes na proteção da infraestrutura digital global. </Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('6')}>Segurança de Sistemas</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('38')}>Redes de Computadores</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> DevOps </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Um profissional de DevOps trabalha para otimizar e acelerar o ciclo de vida do desenvolvimento de software, implementando práticas ágeis e ferramentas de automação para garantir uma integração suave entre as fases de desenvolvimento, teste e implantação. Eles são responsáveis por configurar e gerenciar infraestruturas de computação em nuvem, bem como por implementar e manter pipelines de entrega automatizados, que garantem a qualidade e estabilidade do software, permitindo entregas rápidas e confiáveis. Além disso, os profissionais de DevOps promovem uma cultura de colaboração e compartilhamento de conhecimento entre equipes, visando aprimorar a eficiência operacional, a escalabilidade e a resiliência dos sistemas.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('21')}>Provisionamento e Operação de Infraestruturas</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('38')}>Redes de Computadores</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('7')}>Sistemas Distribuídos</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('39')}>Sistemas Operacionais</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Experiência do Usuário </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>A área de de Experiência do Usuário (UX) é responsável por entender as necessidades e comportamentos dos usuários, projetar interfaces e interações que atendam a essas necessidades e garantir que os produtos sejam fáceis de usar e agradáveis de interagir. Ao aplicar princípios de design centrado no usuário, pesquisa de mercado e testes de usabilidade, os designers de UX criam produtos que não apenas atendem às expectativas dos usuários, mas também os encantam e fidelizam. Além disso, a área de UX oferece oportunidades para explorar diversos aspectos do design de interface, como arquitetura de informação, design visual e acessibilidade, permitindo que os profissionais de ciência da computação expressem sua criatividade enquanto impactam positivamente a experiência digital dos usuários. </Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('63')}>Interface Homem-Máquina</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('30')}>Engenharia de Software</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Sistemas Embarcados </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Os profissionais de sistemas embarcados projetam e desenvolvem sistemas computacionais dedicados para uma variedade de aplicações, desde dispositivos médicos e automóveis até eletrodomésticos e dispositivos IoT. Com habilidades em programação de baixo nível, desenvolvimento de firmware e otimização de recursos, os engenheiros de sistemas embarcados enfrentam desafios únicos para garantir o desempenho, a confiabilidade e a segurança dos sistemas, muitas vezes operando com restrições de energia e espaço.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('40')}>Organização e Arquitetura de Computadores</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('29')}>Projeto de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('36')}>Arquitetura de Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('41')}>Interconexão e Redes de Computadores</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Coorporativa </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>Profissionais de ciência da computação neste ambiente podem desempenhar papéis cruciais em gerência, liderança e tomada de decisões estratégicas. Eles são responsáveis por liderar equipes multifuncionais, orientar projetos de desenvolvimento de software e garantir a entrega eficaz de soluções tecnológicas inovadoras. Ao mesmo tempo, esses profissionais enfrentam desafios, como a formulação de estratégias de negócios baseadas em dados, a identificação de oportunidades de crescimento e a gestão de riscos em um mercado competitivo. Além disso, o ambiente corporativo proporciona oportunidades para o desenvolvimento de habilidades de liderança, capacidade de comunicação eficaz e colaboração em equipe. </Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('9')}>Gestão de Projetos</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('19')}>Empreendedorismo em Software</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('34')}>Projeto em Computação I</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('35')}>Projeto em Computação II</Button></WrapItem>
                                    </Wrap>
                                </Stack>
                            </CardFooter>
                        </Card>
                        <Card bg={'#E5DAC5'} boxShadow={'md'}>
                            <CardHeader>
                                <Heading size='md'> Pesquisa Acadêmica </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text textAlign={'justify'}>A área de pesquisa acadêmica, especialmente através de programas de mestrado e doutorado em ciência da computação, oferece uma jornada intelectualmente estimulante para os que buscam aprofundar seu conhecimento em áreas específicas e contribuir para avanços significativos no campo. Durante esses programas, os estudantes têm a oportunidade de explorar tópicos de pesquisa de ponta, colaborar com líderes de pensamento em suas áreas de interesse e desenvolver habilidades avançadas em análise crítica, resolução de problemas e comunicação. A conclusão de um mestrado ou doutorado em ciência da computação pode abrir portas para carreiras na academia, na indústria de pesquisa, em empresas de tecnologia inovadoras ou até mesmo no empreendedorismo, proporcionando aos graduados a oportunidade de fazer contribuições significativas para o avanço da ciência e da tecnologia.</Text>
                            </CardBody>
                            <CardFooter flexDirection={'column'}>
                            <Text fontWeight={'bold'} mb={'2'}>Principais Disciplinas Relacionadas:</Text>
                                <Stack>
                                    <Wrap spacing={2}>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('42')}>Metodologia Científica</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('43')}>PTCC</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('45')}>TCC</Button></WrapItem>
                                        <WrapItem><Button bg={'#D0C6FF'} color={'#185195'} size={'sm'} onClick={() => handlePath('')}>Demais disciplinas que o aluno tenha interesse em se aprofundar</Button></WrapItem>
                                    </Wrap>
                                </Stack>
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