import { Flex, Heading, Image, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

type headerProps = {
    isHome?:boolean;
}

export function Header({isHome}:headerProps) {
    const navigate = useNavigate();
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
        <Flex align={'center'} bg={'#7DA6F2'}>
            <Image onClick={handleHome} w='10%' src='/fubby-octopus.png' cursor={'pointer'}/>
            {isHome? '': 
            <Heading onClick={handleHome} cursor={'pointer'} color={'white'} fontFamily={'Maven Pro'}>Fubby</Heading> 
            }
            <Spacer/>
            <Flex pr={'4rem'} fontFamily={'Maven Pro'}>
                <Breadcrumb spacing={'2rem'} separator={''} fontSize={'xl'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink color={'white'} textDecoration="none" _hover={{ boxShadow:'md', bg: 'blue.200', borderRadius:'4' }} onClick={handleCCPaths}>Trilhas em Computação</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink color={'white'} textDecoration="none" _hover={{ boxShadow:'md', bg: 'blue.200', borderRadius:'4' }} onClick={handleDisciplines}>Disciplinas</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink color={'white'} textDecoration="none" _hover={{ boxShadow:'md', bg: 'blue.200', borderRadius:'4' }} onClick={handleStudentSpace}>Área do Aluno</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
        </Flex>
    );
}