import axios from "axios";

const API_URL = "https://nlp-toxic-detection.onrender.com";

export async function analyseComment(commentData: string): Promise<any | any> {
    try {
        const response = await axios.post<{ result: string }>(`${API_URL}/analyse`, { comment: commentData });
        return response.data;
    } catch (error) {
        return null;
    }
}