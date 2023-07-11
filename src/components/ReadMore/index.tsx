"use client";
import { INew } from "@/app/page";
import { api } from "@/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IReadMoreProps {
   postId: string;
}

export const ReadMore = ({ postId }: IReadMoreProps) => {
   const [loading, setLoading] = useState(false);
   const [newsList, setNewsList] = useState<INew[]>([]);

   useEffect(() => {
      const loadNews = async () => {
         try {
            setLoading(true);
            const { data } = await api.get<INew[]>("/news");
            setNewsList(data);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };
      loadNews();
   }, []);

   const readMoreNewsList = newsList.filter(
      (currentNew) => String(currentNew.id) !== postId
   );

   return loading ? (
      <p>Carregando...</p>
   ) : (
      <ul>
         {readMoreNewsList.map((currentNew) => (
            <li key={currentNew.id}>
               <span>{currentNew.category}</span>
               <h3>{currentNew.title}</h3>
               <p>{currentNew.author}</p>
               <Link href={`/post/${currentNew.id}`}>Ler mais</Link>
            </li>
         ))}
      </ul>
   );
};
