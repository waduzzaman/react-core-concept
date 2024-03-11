import { useEffect, useState } from "react"

export default function Photos(){
    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')  
            .then(response => response.json()) 
            // .then(data=>console.log(data)) 
            .then (data => setPhotos(data))  
            
        
    },[])    
    return(
        <div style={{border:'2px solid red'}}>

            <h3>Photo{photos.length}</h3>
            {
                photos.map((photo) => 
                    <div  key={photo.id} >
                        <img src={photo.thumbnailUrl} alt=""/>
                        <h4>{<photo className="title">{photo.title}</photo>}</h4>                        
                    </div>
                )
            }
            
        </div>
    )
}