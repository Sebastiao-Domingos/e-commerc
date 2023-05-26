import {Div} from "./style"
import {log , photo1 , photo2,photo3 , photo4 , photo5 , photo6, photo7 , photo8, photo9 ,photo10 , photo11 , photo12,photo13,photo14,photo15,photo16 } from "../../../images/exportImages.js";
import {ColorContext} from "../../../contexts/export.js"
import {Item } from "./item/Item"
import { FaChevronLeft , FaChevronRight } from "react-icons/fa"
import {useContext ,useRef,useState } from "react"

export default function Sobre() {

  const [position , setPosition ] = useState(0);
  const {colors } = useContext(ColorContext);


  const wrapperSlider = useRef();

  function handleScroll( type ){
    
    switch ( type ) {
      case "go":
        if( position < 4485)
          setPosition( current => current + 1495 );
        break;
    
      case "goBack":
        if( position > 0 )
          setPosition( current => current - 1495 );
        break;

    }

    wrapperSlider.current.scrollTo( {
      top:0,
      left:position,
      behavior: "smooth"
    } );
  }

  return (
    <Div colors = {colors}>
      <div className="container">
        <div className="header">
            <img src={log} alt="" />
            <h3>Saiba mais sobre a Empresa SOLEVO</h3>
        </div>
        <div className="containerSlider">
          <button onClick = { () => handleScroll("go") }><FaChevronLeft /></button>
          <div className="contentSlider">
            <div className="contentWrapper" ref ={wrapperSlider}>
              <div className="wrapper" >
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </div>
          </div>
          <button onClick = { () => handleScroll("goBack") } ><FaChevronRight /></button>
        </div>
      </div>
    </Div>
  )
}
