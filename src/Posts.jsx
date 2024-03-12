import { useEffect, useState } from "react";
import Post from "./Post";


export default function Posts () {
    
    const  [posts, setPosts] =useState([]); 

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")     
            .then((response) => response.json())
             .then((data) =>setPosts(data)) 
                            //para ver los
              
         }, []);

       

    return (
        <div >     

            <h2>Posts{posts.length}</h2>
            {
               posts.map((post)=><Post key={post.id} post={post}/> )
             
            }
          
          
            
        </div>
    );
}

