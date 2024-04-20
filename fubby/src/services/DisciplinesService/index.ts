import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

export async function getDisciplines() {
    try {
        const querySnapshot = await getDocs(collection(db, "disciplinas"));
        let data: any = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    } catch (error) {
        console.error('Erro ao recuperar as disciplinas:', error);
        throw error;
    }
};