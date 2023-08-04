import { useContext , useCallback,useState } from 'react'
import { FaChevronUp,FaUserCircle } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Nav } from './style'
import { ColorContext, UserContext } from '../../../contexts/export.js'
import {Confirm,Loading } from '../../modals/export.js'

export function MenuGeral() {
  const {colors , } = useContext( ColorContext );
  const { user ,setUser } = useContext(UserContext);

  const [showModals ,setShowModals ] = useState({confirm : false , load : false } )

  const handleChangeElementMenu = useCallback((element )=>{
    const elements = document.querySelectorAll('.firstMenu .ul1 li');
    
    for( let i = 0 ; i< 4;i++){
      if( i === element ) elements[i].style.background= colors.blue;
      else elements[i].style.background ="transparent";
    }
    
  },[])

  function handleConfirm(){
    setShowModals({...showModals , confirm : true } );
  }

  function handleLogout(){
    setShowModals({...showModals , confirm : false , load:true} );

    setTimeout(() => {
      setUser({...user , logged:false});
      setShowModals({...showModals , confirm : false , load:false} );
    }, 1500 );
  }

  function handleGoBack() {
    setShowModals({...showModals , confirm : false} );
  }

  return (
    <>
      <Nav colors = { colors }>
        <div className="firstMenu">
          <ul className = "ul1">
            <li onClick = { () => handleChangeElementMenu(0) }>
              <Link to ="/">Loja Online</Link>
            </li>
            <li onClick = { () => handleChangeElementMenu(1) }>
              <Link to ="/sobre">Sobre Nós</Link>
            </li>
            <li onClick = { () => handleChangeElementMenu(2) }>
              <Link to ="/accao">Acção Social</Link>
            </li>
            <li onClick = { () => handleChangeElementMenu(3) }> Ver  <FaChevronUp />
              <ul>
                <li>
                  <Link to ="/conversar">Conversar com SOLEVO</Link>
                </li>  
                <li>
                  <Link to ="/perfil">Meu Perfil</Link>
                </li>
                <li>
                  <Link to ="/compras">Minhas Compras</Link>
                </li>
              </ul>    
            </li>
          </ul>
          { user.logged ? (
              <div className ="userMenu">
                <p><FaUserCircle /> { user.userdate.nome } </p>
                <ul>
                  <li>{user.userdate.email }</li>
                  <li>
                    <Link to ="/perfil" >Perfil</Link>
                  </li>
                  <li>
                    <Link to ="/" onClick = { handleConfirm } >Sair</Link>
                  </li>
                </ul>
              </div>
          ):(
            <ul>
              <li>
                <Link to = "/inicial/signin">Entrar</Link>
              </li>
              <li>
                <Link to ="/inicial/signup">Registrar-se</Link>
              </li>
            </ul>
          )}
        </div> 
      </Nav>
      { showModals.confirm && <Confirm    
            text ="Queres mesmo sair da tua conta ?"
            event1 ={handleLogout}
            event2 ={ handleGoBack}
        /> 
      }
      { showModals.load && <Loading /> }
    </>
  )
}
