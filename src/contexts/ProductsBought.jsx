// @type-chec
import { createContext , useState } from 'react'


export const BoughtContext = createContext({});


export function BoughtProvider ({children}) {

    const [ productsBought , setProductsBought ] = useState([]);
    const [ counter , setCounter ] = useState(0);

    return (
        <BoughtContext.Provider  value = { {productsBought , setProductsBought,counter , setCounter }}>
            { children }
        </BoughtContext.Provider >
    )
}
