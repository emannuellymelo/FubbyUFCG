import { Button, Card, CardBody, Textarea, Spinner, Box, HStack, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import axios from 'axios';

type addCommentProps = {
  disciplinaId: string,
  disciplinaNome: string,
  disciplinaInfo: string,
}

export function AddComment({ disciplinaId, disciplinaNome, disciplinaInfo }: addCommentProps) {
  const [commentData, setCommentData] = useState("");
  const [comentarios, setComentarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  let dateString = "";
  const toast = useToast();


  const addCommentToFirestore = async () => {
    try {
      const docRef = doc(db, "disciplinas", disciplinaId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { comentarios: comentariosExistentes } = docSnap.data() || { comentarios: [] };
        const updatedComentarios = [
          ...comentariosExistentes,
          {
            comentario: commentData,
            data: dateString
          }
        ];
        await updateDoc(docRef, { comentarios: updatedComentarios });
        setComentarios(updatedComentarios); // Atualiza o estado local com os novos comentários
      } else {
        await setDoc(doc(db, "disciplinas", disciplinaId), {
          nome: disciplinaNome,
          detalhes: disciplinaInfo,
          comentarios: [
            {
              comentario: commentData,
              data: dateString
            }
          ]
        });
        setComentarios([{ comentario: commentData, data: dateString }]); // Atualiza o estado local com os novos comentários
      }
    } catch (error) {
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
    getDate()
    try {
      setLoading(true)
      const healthy = await axios.post<{ result: string }>("http://127.0.0.1:5500/analyse", { comment: commentData });
      if (healthy.data.result === "1") {
        await addCommentToFirestore();
        toast({
          title: 'Comentário Enviado!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Comentário Não Enviado.',
          description: "Seu comentário foi identificado como não apropriado. Tente fazer um comentário construtivo.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }

    } catch (error) {
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
          <Card w={'45rem'} fontFamily={'Poppins'} mb={10}>
            <CardBody w={'100%'} bg={'gray.200'}>
              <Textarea onChange={((ev) => setCommentData(ev.target.value))} placeholder="Seu comentário" />
              <Button onClick={handleAdd} colorScheme="blue" mt={1}>Enviar</Button>
            </CardBody>
          </Card>
        </VStack>
      }
    </Box>
  );
}