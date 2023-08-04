import { Div} from "./style"
import { log ,photo1 , photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo10,photo11 } from "../../../images/exportImages.js"
import {Header} from "../buyNow/header/Header"
import {Item} from "./item/Item"
import {useState } from "react"
export default function Accao() {
  document.title = "Acção Social"
  
  const [items ,setItems ] = useState([photo1,photo2,photo7,photo11,photo10,photo6,]);

  return (
    <Div>
      <div className="body">
        <Header   title = "Algumas acções que a SOLEVO fez para a sociedade" />
        <div className="container">
          { items && items.map( ( item , index ) => (
            <Item  photo = {item} chave = {index}  key = {index}/>
          ))}
        </div>
      </div>

    </Div>
  )
}
