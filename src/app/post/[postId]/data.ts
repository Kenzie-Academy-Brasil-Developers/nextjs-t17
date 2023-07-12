import { API_BASE_URL } from "@/services/api";

export async function getNew(postId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${postId}`, { cache: 'no-store' })
      const data = await response.json(); 
      //const { data } = await api.get<INew>(`/news/${postId}`);
      return data;
    } catch (error) {
       console.log(error);
       return null;
    }
 }