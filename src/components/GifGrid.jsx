import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";



export const GifGrid = ({category}) => {
  
const {images, isLoading} = useFechGifs(category);



// const [images, setImages] = useState([]);

//     const getImages = async ()=>{
//         const newImages = await getGifs(category)
//         setImages(newImages)
//     }
    
//     useEffect(()=>{
//         getImages();

        
//     },[])
    

    return (
        <>
            <h3>{category}</h3>

            

            <div className="card-grid"> 
                {
                    
                    // images.map(img =>(
                    //     <li key={img.id}>{img.title}</li>
                    // ))

                    images.map((image)=>{
                        return(
                            <GifItem 
                                key={image.id}
                                // exparse todas las propiedades q vienen en image 
                                {...image}
                                
                             />
                        )
                    })
                }
             
            </div>
            
        </>
  )
}
