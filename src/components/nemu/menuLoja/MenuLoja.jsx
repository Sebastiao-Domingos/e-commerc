import { Nav } from './style'
import { useContext , useCallback,useState,useRef,useEffect , useReducer  } from 'react'
import { ColorContext,BoughtContext,ProductsContext } from '../../../contexts/export.js'
import { BtnLink } from '../../export.js'
import { Link } from "react-router-dom"
import {FaCartPlus, FaChevronUp , FaSearch } from "react-icons/fa"
import {log} from "../../../images/exportImages.js"
import {Card } from './card/Card'


export function MenuLoja() {
    const {colors , } = useContext( ColorContext );
    const { productsBought ,counter } = useContext(BoughtContext);
    const { keySearch , setKeySearch, typeProduct , setTypeProduct } = useContext(ProductsContext);

    const [search , setSearch ] = useState('');
    const [positionY,setPositionY ] = useState(0);
    const [inputFocus , setInputFocus ] = useState(false);
    const cardRef = useRef();
    const searchRef = useRef();




    function reducer( state , action ) {
      switch (action) {
        case 2:
          return { ...state , active1 : false , active2 : true , active3 : false };
        case 3:
          return {...state , active1:false , active2:false, active3:true};
        default:
          setTypeProduct( () => action);
          scrollWindow(600);
          return { ...state ,active1 : true , active2:false , active3:false};
      }
    }

   const [state, dispatch] = useReducer(reducer , { active1 : true , active2:false, active3:false});

    window.addEventListener( 'scroll' ,() =>{
      setPositionY( () =>  window.scrollY );
    })

    useEffect( () =>{
      if( positionY > 70 ) {
        cardRef.current.className ="goUp" ; 
        searchRef.current.className ="searchUp"
      } else {
        cardRef.current.className ="goDown" ;
        searchRef.current.className ="normalSearch";     
      } 
    },[ positionY])


    const handleApearCard = useCallback( () => {
      cardRef.current.children[0].children[1].style.display ="block"; 
    },[])

    function handleSetWindowScroll(){
      setInputFocus( ( previous ) => true );

      scrollWindow( 600 );
    }

    function handleOnBlur(){
      if( window.pageYOffset >= 600 ){
        setInputFocus( ( previous ) => false );
      }
    }


  return (
    <Nav colors = { colors } focused = { inputFocus} >
      <div className="secondMenu">
          <div className="divLog">
            <img src={log} alt="logo" />

            <div className="cardRefplus" ref ={ cardRef } id ="card">
              <div>
              <button  onClick = { handleApearCard}> <span>Carrinho : {counter }</span>  <FaCartPlus /></button>

                <Card colors ={colors}/>
              </div>
            </div>


          </div>
          <div className="user">
            <ul>
                <BtnLink Icon = { FaChevronUp } colors = { colors }  path = "/" text = "produtos" active = { state.active1 }    >
                  <ul>
                    <li onClick = { () => dispatch("fertilizantes") }>Fertilizantes</li>
                    <li onClick = { () => dispatch("adubos") }>Adubos</li>
                    <li onClick = { () => dispatch("maquinas") }>Máquinas</li>
                    <li onClick = { () => dispatch("sementes") }>Sementes</li>
                  </ul>
                </BtnLink>
                <BtnLink colors = { colors } path = "/"  text = "Novos produtos"  active ={ state.active2 }   event = { () => dispatch( 2 ) } />
                <BtnLink colors = { colors } path = "/"  text = "Destaques"  active ={ state.active3 }  event = { () => dispatch( 3 ) } />
            </ul>

            <form onSubmit = { ( e ) => e.preventDefault() } className = "normalSearch" ref ={ searchRef }>
              <input type="text" name="search" id="search" placeholder = "Pesquisa por nome ou ID " 
                value ={keySearch }
                onInput= { e => setKeySearch( e.target.value ) } 
                onFocus ={handleSetWindowScroll}
                onBlur = { handleOnBlur } 
              />
              <button><FaSearch /></button>
            </form>
              
          </div>
      </div>     
    </Nav>
  )
}



function scrollWindow( positionY , positionX = 0 ){
  window.scrollTo( {
    top : positionY,
    left : positionX,
    behavior : "smooth"
  })
}