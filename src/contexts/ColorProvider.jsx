import { createContext , useState  } from 'react'

export  const ColorContext = createContext({});


export const ColorProvider =  ( { children } ) => {

    const [ colors , ] = useState({
        green1:'#52ac46', blue:'#0075af',violet : '#9b59b6',black : '#34495a',white:"#fefefe"
    })

    return (
        <ColorContext.Provider value={{colors}}>
            { children }
        </ColorContext.Provider> 
    )
}