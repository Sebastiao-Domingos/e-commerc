import { Nav } from './style'
import { useContext , useCallback,useState } from 'react'
import { ColorContext } from '../../contexts/ColorProvider'
import { BtnLink } from '../export.js'
import { Link } from "react-router-dom"
import {FaCartPlus, FaChevronUp , FaSearch } from "react-icons/fa"

export default function Menu() {
    const {colors , } = useContext( ColorContext );
    const [ [act1,setAct1],[act2,setAct2],[act3,setAct3] ]  = [ useState(true) , useState(false) , useState(false)]
    const btns = [setAct1 , setAct2 , setAct3 ];

    const [search , setSearch ] = useState('');

    const handleChange = useCallback( ( index ) => {
        btns.map( ( btn , pos ) => {
            if( index === pos) btn( true );
            else btn(false);
        })
    } , [])


    function handleSearch( e ){
        e.preventDefault();
        // console.log( search );
    }
 

  return (
    <Nav colors = { colors }>
      <div className="firstMenu">
        <ul>
          <li>
            <Link to ="/">Loja Online</Link>
          </li>
          <li>
            <Link to ="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to ="/accao">Acção Social</Link>
          </li>
          <li> Ver  <FaChevronUp />
            <ul>
              <li>
                <Link to ="/">Minhas Compras</Link>
              </li>
              <li>
                <Link to ="/">Meu Perfil</Link>
              </li>
              <li>
                <Link to ="/">Conversar com SOLEVO</Link>
              </li>  
            </ul>    
          </li>
        </ul>
        <ul>
          <li>
            <Link to = "/inicial/signin">Entrar</Link>
          </li>
          <li>
            <Link to ="/inicial/signup">Registrar-se</Link>
          </li>
        </ul>
      </div>
      <div className="secondMenu">
          <div className="divLog">
            <span>SOLEVO</span>

            <div className="cardplus">
                <button> <span>Carrinho : 00</span>  <FaCartPlus /></button>
            </div>
          </div>
          <div className="user">
            <ul>
                <BtnLink Icon = { FaChevronUp } colors = { colors }  path = "/" text = "produtos" active = { act1 }   event = { () => handleChange(0) } >
                  <ul>
                    <li>
                      <Link to ="/">Fertizantes</Link>
                    </li>
                    <li>
                      <Link to = "/">Adubos</Link>
                    </li>
                    <li>
                      <Link to = "/">Máquinas</Link>
                    </li>
                    <li>
                      <Link to = "/">Sementes</Link>
                    </li>
                  </ul>
                </BtnLink>
                <BtnLink colors = { colors } path = "/inicial"  text = "Novos produtos"  active ={act2}   event = { () => handleChange(1) } />
                <BtnLink colors = { colors } path = "/inicial"  text = "Destaques"  active ={act3}  event = { () => handleChange(2) } />
            </ul>

            <form onSubmit = {handleSearch}>
              <input type="text" name="search" id="search" placeholder = "Pesquisa por nome ou ID " 
                value =  { search }
                onInput= { e => setSearch( e.target.value )} 
              />
              <button><FaSearch /></button>
            </form>
              
          </div>
      </div>
        
    </Nav>
  )
}

