import { ColorContext,UserContext } from '../../../contexts/export.js'
import { BtnNormal } from '../../export.js'
import {Div} from './style'
import { Loading, Warn ,Allowed } from "../export.js"
import {Link,Navigate  } from 'react-router-dom'
import { useContext,useState,useEffect, useReducer } from 'react'
import axios from 'axios'
import {FaBan , FaUserAltSlash } from 'react-icons/fa'
const url = 'http://localhost/trabalhoPB/api';

export default function SignInModal() {
  const [ dataUser , setDataUser ] = useState({email : '', pass:'' });
  const { colors } = useContext(ColorContext);
  const { user , setUser } = useContext(UserContext);
  
  function reducer( state ,action ){
    switch ( action ) {
      case "loader":
        return {...state, load:true , allow:false , warn:false , warn2:false};
      case "allowed":
        return {...state, load:false , allow:true , warn:false , warn2:false};
      case "warn":
        return {...state, load:false , allow:false , warn:true , warn2:false};
      case "warn2":
        return {...state, load:false , allow:false , warn:false , warn2:true};
      default:
        return {...state , load:false , allow:false,warn:false , warn2:false};
    }
  }
  const [state, dispatch] = useReducer(reducer,{ load:false , allow:false,warn:false , warn2:false})

  function handleLogin( e ){
    e.preventDefault();

    if( validateEmptyInput( [dataUser.email , dataUser.pass ] ) ){
        dispatch("loader");
        
        login(dataUser.email ,dataUser.pass  ).then( res => {

          if( res["dado"] !== "NO" ){
            dispatch("allowed");
            setTimeout(() => {
              let constAdmin = ( res['dado'].email === "administrador12345678900987654321@gmail.com" ) ? true :false;
              setUser({ ...user, userdate : res["dado"] , logged : true ,admin : constAdmin  } );
              dispatch("");
            }, 2000);
          }else{
            dispatch("warn");
            setTimeout(() => {
              dispatch();
            }, 2000);
          }
        })

    }else {
      dispatch("warn2");
      setTimeout(() => {
        dispatch();
      }, 1600);
    }
  }

  return (
  <>
    <Div colors ={colors}>
      <div>
        <form onSubmit = { handleLogin }>
          <div>
            <label htmlFor="">Email </label>
            <input type="email" name="email" id="email"   
              value={dataUser.email }
              onChange = { e => setDataUser({...dataUser , email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" name="pass" id="pass" 
              value={dataUser.pass }
              onChange = { e => setDataUser({...dataUser , pass : e.target.value})}
            />
          </div>
          <div>
            <BtnNormal 
                text = "Sign In"
                width= "6rem"
                backColor = { colors.green1}
            />
            <p><Link to ="/inicial/signup">Não tenho uma conta. </Link></p>
          </div>
        </form>
      </div>

      { user.logged &&  ( !user.admin  ? <Navigate to ="/" /> : <Navigate to = "/dashBoard" /> )}

    </Div>
    { state.load && <Loading /> }
    { state.allow && <Allowed  user /> }
    { state.warn && <Warn 
      text1="Usuário náo encontrado! "
      text2 ="Por favor, verifica o teu email e a palavra passe."
      Icon = { FaUserAltSlash }
    /> }
    { state.warn2 && <Warn 
      text1="Campos vazios!"
      text2 ="Por favor, preencha todos os campos!"
      Icon = { FaBan }
    
    /> }

  </>
  )
}

function validateEmptyInput(array ){

   const hasEmptyInput= array.every( input => input.trim() !== "");

   return hasEmptyInput;
}

async function login( email, pass ){
    try {
      const res =  await fetch(`${url}/login/${email}/${pass}`)
      const response = await res.json();
      return response;
    } catch (error) {
      return "ERROR";
    }
}