import { HamburgerIcon } from '@chakra-ui/icons';
import { Text, Flex, Heading, Image, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

type headerProps = {
    isHome?: boolean;
}

export function Header({ isHome }: headerProps) {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCCPaths = () => {
        return navigate('/trilhas');
    }
    const handleStudentSpace = () => {
        return navigate('/area-do-aluno');
    }
    const handleDisciplines = () => {
        return navigate('/disciplinas');
    }
    const handleHome = () => {
        return navigate('/');
    }
    return (
        <Flex align={'center'} bg={'#0D0149'} h={'8rem'}>
            <Image onClick={handleHome} w='9%' src='/fubby-octopus.png' cursor={'pointer'} />
            {isHome ? '' :
                <Heading onClick={handleHome} cursor={'pointer'} color={'#EFECFF'} fontFamily={'Maven Pro'} fontWeight={'600'} >Fubby</Heading>
            }
            <Spacer />

            <IconButton
                bg={'#0D0149'}
                icon={<HamburgerIcon color={'white'} />}
                display={['block', 'block', 'none']} // Exibir apenas em telas pequenas
                onClick={onOpen}
                aria-label="Open menu"
                _hover={'none'}
            />

            <Flex pr={'4rem'} fontFamily={'Maven Pro'} display={['none', 'none', 'block']}>
                <Breadcrumb spacing={'2rem'} separator={''} fontSize={'xl'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink color={'#EFECFF'} textDecoration="none" _hover={{ boxShadow: 'md', borderRadius: '4' }} onClick={handleCCPaths}>Trilhas em Computação</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink color={'#EFECFF'} textDecoration="none" _hover={{ boxShadow: 'md', borderRadius: '4' }} onClick={handleDisciplines}>Disciplinas</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink color={'#EFECFF'} textDecoration="none" _hover={{ boxShadow: 'md', borderRadius: '4' }} onClick={handleStudentSpace}>Área do Aluno</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={'white'} />
                    <DrawerBody bg={'#0D0149'}>
                        <VStack align="start" spacing={4} mt={'2rem'}>
                            <Button bg={'#0D0149'} _hover={'none'}><Text color={'#EFECFF'} textDecoration="none" onClick={handleCCPaths}>Trilhas em Computação</Text></Button>
                            <Button bg={'#0D0149'} _hover={'none'}><Text color={'#EFECFF'} textDecoration="none" onClick={handleDisciplines}>Disciplinas</Text></Button>
                            <Button bg={'#0D0149'} _hover={'none'}><Text color={'#EFECFF'} textDecoration="none" onClick={handleStudentSpace}>Área do Aluno</Text></Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}