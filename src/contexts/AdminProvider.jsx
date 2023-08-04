import {createContext } from "react";

const AdminContext = createContext({});

export function AdminProvider({children}){
    const [ admin , setAdmin ] = useState({data , logged : false});

    return <AdminContext.Provider  value = { admin , setAdmin }> {children}</AdminContext.Provider >
}