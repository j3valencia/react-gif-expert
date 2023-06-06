import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange =({target})=>{
        setInputValue(target.value);
    }

    const onSubmitInput =(event)=>{
        event.preventDefault();
        // console.log(inputValue)

        if(inputValue.trim().length<=1) return;  //valida que tenga mas de 1 caracterer

        onNewCategory(inputValue.trim());

        setInputValue('') 
      
    }

    return (

    <form  onSubmit={onSubmitInput}>
        <input 
            type="text" 
            placeholder="Buscar Gifs" 
         
            onChange={onInputChange}
            
        />

    </form>
  )
}
