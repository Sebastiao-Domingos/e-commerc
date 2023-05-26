import {Div} from './style'
import {FaUserAltSlash } from "react-icons/fa"
import { BtnNormal } from '../../export.js'
import {ColorContext } from '../../../contexts/ColorProvider'
import { useContext ,useCallback ,useState} from 'react';
import { Navigate} from 'react-router-dom'


export const Alert = () => {

  const { colors , } = useContext(ColorContext);
  const [ goback , setGoback ] = useState(false);
  const [ goToLogin ,setGoToLogin ] = useState(false);


  const handleGoBack = useCallback( ()=>{
      setGoback( current => !current);
  },[]);

  const handleToLogIn = useCallback( ()=> {
      setGoToLogin( current => !current );
  } ,[])

  return (
    <Div colors = { colors }>

      <div className="content">
        <FaUserAltSlash />

        <p>Para continuares com a compra, tens que entrar na tua conta</p>
      </div>

      
    <div className="buttons">
        <BtnNormal 
            text ="Voltar"
            width="7rem"
            backColor ="#e21515"
            event = {handleGoBack}
        />
        <BtnNormal 
            text ="Fazer o login"
            width="8rem"
            backColor ={colors.green1}
            event = {handleToLogIn }
        />
      </div>

      { goback && <Navigate to = "/" />}
      { goToLogin && <Navigate to ="/inicial/signin" />}

    </Div>
  )
}
