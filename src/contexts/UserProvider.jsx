import {createContext ,useState } from "react";

export const UserContext = createContext({}); 


export function UserProvider( {children} ){
    const [user , setUser ] = useState({logged:false , userdate: {}});

    return <UserContext.Provider value ={ {user ,setUser }}> { children } </UserContext.Provider>
}