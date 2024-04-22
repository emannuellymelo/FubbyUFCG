import { Box, Flex, HStack, Heading, Image, Link, List, ListIcon, ListItem, Select, Text, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Calculator, Clock } from "@phosphor-icons/react";
import { useState } from "react";
import Computation from "../components/Computation";
import { Footer } from "../components/Footer";

const ComplementaryHours = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
    }

    return (
        <Box bg={'#EFECFF'}>
            <Header />
            <VStack textAlign={'center'} justifyContent={'center'} spacing={'2rem'}>
                <Heading fontFamily={'Maven Pro'} mt={'2rem'}>Horas Complementares</Heading>
                <Text fontFamily={'Poppins'} fontSize={'lg'}>Vou te passar algumas informações fundamentais que vão ajudar no planejamento das atividades do seu período</Text>
            </VStack>
            <VStack h={'75vh'} textAlign={'center'} pt={'7rem'} spacing={'2rem'} fontFamily={'Poppins'}>
                <HStack>
                    <Clock size={32} />
                    <Link href={'#informacoes'}>Informações Importantes</Link>
                </HStack>
                <HStack>
                    <Calculator size={32} />
                    <Link href={'#calculadora'}>Calculadora de Créditos</Link>
                </HStack>
            </VStack>

            <Flex id={'informacoes'} direction={'column'} fontFamily={'Poppins'} justifyContent={'left'} minH={'80vh'}>
                <Text pl={'5%'} fontSize={'2xl'} fontWeight={'400'} pb={7}>Informações Importantes</Text>
                <Text pl={'5%'} fontSize={'lg'} fontWeight={'400'} pb={7}>Nesta seção, vou responder algumas das dúvidas mais frequentes entre os alunos, você pode encontrar um conteúdo com mais completude no documento oficial correspondente à <Link color={'blue.500'} href={'https://www.computacao.ufcg.edu.br/graduacao/procedimentos-graduação/aproveitamento-de-atividades-complementares'}>Regulamentação de Atividades Complementares.</Link></Text>
                <List spacing={3} pl={'7rem'} fontSize={'lg'} pr={'5%'} textAlign={'justify'}>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        As Atividades Complementares Flexíveis são obrigatórias para
                        integralização curricular, correspondendo à carga horária de, no máximo, 330 (trezentos e
                        trinta) horas e 22 (vinte e dois) créditos;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        As Atividades Complementares Flexíveis que tenham um caráter
                        continuado só serão integralizadas se não ultrapassarem o limite de 50 horas semanais de
                        atividades acadêmicas;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        É interessante submeter suas atividades até a primeira semana do semestre em que for concluinte, isto é, na primeira semana do seu último semestre no curso;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        São consideradas Atividades Complementares Flexíveis de caráter continuado
                        quaisquer atividades que envolvam uma dedicação de um número mínimo de horas
                        semanais de engajamento, ao longo de várias semanas;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        É de inteira responsabilidade do aluno cumprir efetivamente as Atividades
                        Complementares Flexíveis nos termos desta Resolução e providenciar a documentação que
                        comprove a sua participação;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Clock} color={'#9F8BFF'} />
                        Um template que exemplifica como as atividades devem ser submetidas pode ser visualizado a seguir:
                        <Image src={'/horas_template.png'} pt={'2rem'} pl={'2rem'} w={'60%'}></Image>
                        <Text pl={'2rem'} pt={'1rem'} fontSize={'lg'}>Obs: o índice presente no tipo de atividade corresponde às categorias especificada na planilha do regulamento mencionado acima</Text>
                    </ListItem>
                </List>
            </Flex>

            <Flex id={'calculadora'} direction={'column'} fontFamily={'Poppins'} justifyContent={'left'} mt={'7rem'} minH={'100vh'}>
                <Text pl={'5%'} fontSize={'2xl'} fontWeight={'400'} pb={7}>Calculadora de Créditos</Text>
                <Text pl={'5%'} fontSize={'lg'} fontWeight={'400'} pb={7}>Já se atrapalhou ao tentar contabilizar suas horas? Posso te ajudar a calcular algumas das principais categorias de atividade complementar. O cálculo será feito de acordo com a <Link color={'blue.500'} href={'https://docs.google.com/spreadsheets/d/18U5sBNFCe9ZIjvsV4wUtSvthkaoCzFxcy10_ylU9PR8/edit?usp=share_link'}>planilha oficial de critérios para aproveitamento.</Link></Text>
                <Text pl={'5%'} fontSize={'lg'} fontWeight={'400'} pb={7}>Selecione a categoria de atividade:</Text>
                <Select value={selectedValue} onChange={handleSelect} pl={'5%'} mb={'7rem'} placeholder='Selecione uma atividade' w={'92%'} borderColor={'gray'}>
                    <option value='option1'>1. Participação em Pesquisa de Iniciação Científica ou Extensão Reconhecida Institucionalmente pela UFCG.
                        Exemplos: PET, PIBIC, PIBITI, PIVITI, PIVIC e PROBEX.</option>
                    <option value='option2'>2. Participação em Projeto de Pesquisa e Desenvolvimento Reconhecido Institucionalmente pela UFCG, incluindo atividades de PD&I junto à CodeX.
                    </option>
                    <option value='option3'>3. Participação em Monitoria Reconhecida Institucionalmente pela UFCG.
                    </option>
                    <option value='option4'>4. Realização de Estágio Não Obrigatório.
                    </option>
                    <option value='option5'>5. Participação em Evento (ouvinte)
                    </option>
                    <option value='option6'>6. Participação em Cursos (ouvinte - Presencial, Online, Minicurso...)
                    </option>
                    <option value='option7'>7. Guardians
                    </option>
                </Select>
                <Computation category={selectedValue}/>

            </Flex>
            <Footer/>
        </Box >
    );
}

export default ComplementaryHours;