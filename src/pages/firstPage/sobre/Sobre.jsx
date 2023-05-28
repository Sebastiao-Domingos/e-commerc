import {Div} from "./style"
import {log , photo1 , photo2,photo3 , photo4 , photo5 , photo6, photo7 , photo8, photo9 ,photo10 , photo11 , photo12,photo13,photo14,photo15,photo16 } from "../../../images/exportImages.js";
import {ColorContext} from "../../../contexts/export.js"
import {Item } from "./item/Item"
import { ItemQuestion} from "./itemQuestion/Item"
import { FaChevronLeft , FaChevronRight } from "react-icons/fa"
import {useContext ,useRef,useState ,useEffect } from "react"

export default function Sobre() {
  document.title ="Sobre Nós";

  const [position , setPosition ] = useState(0);
  const [posts , setPosts ] = useState([1,2,3,4]);
  const {colors } = useContext(ColorContext);

  const wrapperSlider = useRef();
  const viewRef = useRef();

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
    changeView( position )
  }

  useEffect( () => {
    viewRef.current.children[0].className ="active";
  } ,[])

  function changeView(position ){
    let newPosition = position/1495;
    for( let i = 0 ; i < viewRef.current.children.length ; i++ ) {
      if( newPosition === i )
        viewRef.current.children[ i ].className="active";
      else 
        viewRef.current.children[ i].className = "";
    }
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
                { posts && posts.map( ( post , index ) => (
                  <Item key = {index}  change = { index%2 ===0 } />
                ))}
              </div>
            </div>
            <div className="views" ref ={ viewRef }>
              { posts && posts.map( ( post , index ) => (
                <div key = {index} ></div>
              ))}
            </div>
          </div>
          <button onClick = { () => handleScroll("goBack") } ><FaChevronRight /></button>
        </div>
        <div className="body">
          <div className="contentBody1">
            <div className="question">
              <img src={log} alt="" />
              <h3>Quem Somos nós ? </h3>

            </div>
            <ItemQuestion photo ={photo11}  active />
          </div>
          <div className="contentBody1">
            <div className="question">
              <img src={log} alt="" />
              <h3>Onde estamos localizados ? </h3>
            </div>
            <ItemQuestion photo = {photo6} />
          </div>

          <div className="contentBody1">
            <div className="question">
              <img src={log} alt=""  />
              <h3>O que nós vendemos? </h3>
            </div>
            <ItemQuestion photo = {photo12}  active/>
          </div>
          <div className="contentBody1">
            <div className="question">
              <img src={log} alt=""  />
              <h3>As nossas tecnologias ? </h3>
            </div>
            <ItemQuestion photo = {photo8}  />
          </div>
        </div>
      </div>
    </Div>
  )
}
