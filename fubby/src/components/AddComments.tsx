import {
  Button, Card, CardBody, Textarea, Spinner, Box, HStack, VStack, useToast, useDisclosure, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";
import { analyseComment } from "../services/CommentsService";

type addCommentProps = {
  disciplinaId: string,
}

export function AddComment({ disciplinaId }: addCommentProps) {
  const [commentData, setCommentData] = useState("");
  const [loading, setLoading] = useState(false);
  let dateString = "";
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null);

  const addCommentToFirestore = async () => {
    try {
      const docRef = doc(db, "disciplinas", disciplinaId);
      const docSnap = await getDoc(docRef);
      const { comentarios: comentariosExistentes } = docSnap.data() || { comentarios: [] };
      const updatedComentarios = [
        ...comentariosExistentes,
        {
          comentario: commentData,
          data: dateString
        }
      ];
      await updateDoc(docRef, { comentarios: updatedComentarios });
    } catch (error) {
      toast({
        title: 'Banco de Dados indisponível',
        description: "Esse é um sistema feito com ferramentas gratuitas, o que faz o acesso a dados ser limitado diariamente. Volte aqui amanhã para verificar a informação dessa página.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.error('Erro ao adicionar comentário:', error);
    }
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const dateFormat = `${day}-${month}-${year}`;
    dateString = dateFormat;
  }

  const handleAdd = async () => {
    onClose();
    getDate();
    try {
      setLoading(true)
      const healthy = await analyseComment(commentData);
      if (healthy && healthy.result === "1") {
        await addCommentToFirestore();
        toast({
          title: 'Comentário Enviado!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })

      } else {
        toast({
          title: 'Comentário Não Enviado.',
          description: "Seu comentário foi identificado como não apropriado, tente fazer um comentário construtivo. Caso já seja, procure refazê-lo usando sinônimos.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }

    } catch (error) {
      toast({
        title: 'Banco de Dados indisponível',
        description: "Esse é um sistema feito com ferramentas gratuitas, o que faz o acesso a dados ser limitado diariamente. Volte aqui amanhã para verificar a informação dessa página.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.error('Erro ao adicionar comentário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {loading ?
        <HStack justifyContent={'center'} p={10}>
          <Spinner size="xl" color="blue.500" />
        </HStack>
        :
        <VStack>
          <Card w={{base:'100%'}} fontFamily={'Poppins'} mb={10}>
            <CardBody w={'100%'} bg={'gray.200'}>
              <Textarea onChange={((ev) => setCommentData(ev.target.value))} placeholder="Seu comentário" />
              <Button onClick={onOpen} colorScheme="blue" mt={1}>Enviar</Button>
              <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                <AlertDialogOverlay />
                <AlertDialogContent bg={'#EFECFF'}>
                  <AlertDialogHeader>Deseja enviar o comentário?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Após enviar você não poderá excluir ou editar seu comentário, revise bem o que será publicado.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} bg={'#FF9688'} onClick={onClose} > Não </Button>
                    <Button colorScheme='green' ml={3} onClick={handleAdd}> Sim </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </CardBody>
          </Card>
        </VStack>
      }
    </Box>
  );
}