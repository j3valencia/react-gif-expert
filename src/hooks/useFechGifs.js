import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFechGifs = (category) => {

const [images, setImages] = useState([]);
const [isLoaging, setIsLoaging] = useState(true)

    const getImages = async ()=>{
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoaging(false)
    }
    
    useEffect(()=>{
        getImages();

        
    },[])
    

    return {
        images: images,
        isLoading: isLoaging

    }
}
