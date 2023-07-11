import { INew } from "@/app/page";
import { api } from "@/services/api";

export async function getNew(postId: string) {
    try {
       const { data } = await api.get<INew>(`/news/${postId}`);
       return data;
    } catch (error) {
       console.log(error);
       return null;
    }
 }