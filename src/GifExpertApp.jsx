import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory =(onNewCategory)=>{
    
      //valida q no se repirta la categoria  pero no valida si es en minusculas o mayusculas

    // if(categories.includes(onNewCategory)) return; 

    //valida que la categoria no se repita asi sea en mayusculas o minusculas
    if(!categories.some(cat=>cat.toLowerCase()=== onNewCategory.toLowerCase())){
      setCategories([ onNewCategory, ...categories]);
    };
    // console.log(onNewCategory);
    
    
  }

  // console.log(categories);

  return (
    <>

        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
          
          />
     
            {
              categories.map((category) => (              
                    <GifGrid 
                      key={category} 
                      category={category} 
                    />
                 )              
              )
            
            }
        
    
    
    </>
  )
}
