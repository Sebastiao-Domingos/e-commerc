import {createContext,useState } from "react"

export const ProductsContext = createContext({});



export const ProductsProvider = function({children }){

    const [ products , setProducts ] = useState([]); 
    const [ keySearch , setKeySearch ] = useState("");
    const [ typeProduct , setTypeProduct ] = useState("fertilizante");
    
    return (
        <ProductsContext.Provider value = { { products , setProducts ,keySearch , setKeySearch ,typeProduct , setTypeProduct}} >
            { children }
        </ProductsContext.Provider >
    )
}