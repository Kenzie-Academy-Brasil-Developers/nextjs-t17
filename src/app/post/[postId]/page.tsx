import { ReadMore } from "@/components/ReadMore";
import { Metadata } from "next";
import { getNew } from "./data";

interface IPostSingleProps {
   params: {
      postId: string;
   };
}

export const metadata: Metadata = {
   title: "Minha Aplicação - Post",
};

const PostSingle = async ({ params }: IPostSingleProps) => {
   const { postId } = params;

   const currentNew = await getNew(postId);

   return (
      <main>
         {currentNew ? (
            <>
               <h1>{currentNew.title}</h1>
               <span>{currentNew.category}</span>
               <span>{currentNew.author}</span>
               <p>{currentNew.content}</p>
            </>
         ) : null}
         <ReadMore postId={postId} />
      </main>
   );
};

export default PostSingle;
