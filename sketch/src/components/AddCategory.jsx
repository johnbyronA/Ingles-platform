import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <=1 ) return
        // newsetCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue("")
    };


    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

  return (
    
      <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Producto" 
            value={inputValue}
            onChange={onInputChange} 
        />
      </form>
    
  );
};
