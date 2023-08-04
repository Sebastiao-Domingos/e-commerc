import {Div} from "./style"
import { Body , MenuH , MenuVertical } from "./export.js"

import {useState,useEffect } from "react"


export const DashBoard = ({children}) => {
  document.title = "DASHBOARD"
  const [showed , setShowed] = useState(false);
  return (
    <Div>
        <MenuH setShowed = { setShowed } />
        <Body showed= { showed }> {children} </Body>
        <MenuVertical showed = {  showed } />
    </Div>
  )
}
