import { Outlet } from 'react-router-dom'
import {FaChevronUp} from 'react-icons/fa'
import styled , { keyframes ,css}  from "styled-components";
import { useState , useEffect  } from "react";

export default function App() {
  const [ativar , setAtivar ] = useState(false);

  window.addEventListener( 'scroll' ,() =>{
    const pos =window.scrollY ;
    if( pos>200 ){
      setAtivar( () => true);
    }
    else {
      setAtivar( () => false);
    };
  })

  function goTop() {
    window.scrollTo( {
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <Div ativado = {ativar}>
        <Outlet />
        <button className = "elevador" onClick = { goTop }><FaChevronUp/></button>
    </Div>
  )
}


const come = keyframes`
  0%{
    bottom:-2rem;
  }
  100%{
    bottom:2rem;
  }

`
const go = keyframes`
  0%{
    bottom:2rem;
  }
  100%{
    bottom:-4rem;
  }

`


export const Div = styled.div`
    
    .elevador{
        position:fixed;
        padding:12px 15px;
        right:4rem;
        font-size:2rem;
        border-radius:3px;
        color:#52ac46;

        ${ props => {
          if( props.ativado ) 
            return css`
              animation : ${ come } .8s forwards;
            `
          else return css`
              animation : ${go} .8s forwards;
          `
        }}
    }
`;

