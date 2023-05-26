import { useContext ,useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import {FaBan } from 'react-icons/fa'
import { ColorContext ,UserContext } from '../../../contexts/export.js'
import { FaCamera } from 'react-icons/fa'
import { BtnNormal } from '../../export.js';
import {Div} from "./style"
import {addUser} from '../../../request/dataFunction'
import { Loading , Allowed ,Warn } from '../export.js'

export default function SignUP() {
  const { colors } = useContext( ColorContext );
  const { user ,setUser  } = useContext( UserContext );

  const [ newUser , setNewUser  ] = useState({
    name : "",
    email :"",
    tel : "",
    morada: "",
    pass : "",
    chat : [],
    compras :[],
  })

  const [ confirmPass , setConfirmPass ] = useState('');

  const [ showModal , setShowModal ] = useState({load :false , warn :false,warn2 : false , allow : false });

  const navigator = useNavigate();


  function handleSignUp( e ){
    e.preventDefault();

    if( validateInput( newUser ) ) 
      if( validatePassWords( newUser, confirmPass ) ) {
        
        setShowModal( {...showModal , load : true });

        setTimeout(() => {
          setShowModal( {...showModal , load : false });
          
          if( addUser( newUser ) ) {
            setUser({...user , logged:true , userdate : newUser});
            
            setShowModal({...showModal , allow:true})
            
            setTimeout(() => {
              setShowModal({...showModal , allow:true})
              navigator("/");
            }, 3000);
            
            setNewUser({...newUser, name : "",email :"", tel : "", morada: "", pass : "", chat : [], compras :[], });
            setConfirmPass("");

          }else {
            alert("falha na linha");
          }

        }, 3000);

      }else {
        setShowModal({...showModal  , warn2:true });
        setTimeout(() => {
          setShowModal({...showModal  , warn2:false });
        }, 3000);
      } 
   else {
      setShowModal({...showModal , warn :true });
      setTimeout(() => {
        setShowModal({...showModal , warn :false });
      }, 3000);
    }
  }


  return (
    <>
      <Div colors = { colors }>
        <form onSubmit= { handleSignUp  }>
          <div className="first">
            <div>
              <label htmlFor="name">Nome Complento : </label>
              <input type="text" name="name" id="name" 
                value ={ newUser.name }
                onInput = { ( e ) => setNewUser( {...newUser , name : e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" 
                value ={ newUser.email }
                onInput = { ( e ) => setNewUser( {...newUser , email : e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="tell">Telemovel</label>
              <input type="tel" name="tel" id="tel" 
                value ={ newUser.tel }
                onInput = { ( e ) => setNewUser( {...newUser , tel : e.target.value  })}
              />
            </div>
            <div>
              <label htmlFor="morada">Morada</label>
              <input type="text" name="morada" id="morada" 
                value ={ newUser.morada }
                onInput = { ( e ) => setNewUser( {...newUser , morada : e.target.value })}
              />
            </div>
          </div>
          <div className="second">
            <div>
              <label htmlFor="pass1">Palavra Passe</label>
              <input type="password" name="pass1" id="pass1" 
                value ={ newUser.pass }
                onInput = { ( e ) => setNewUser( {...newUser , pass : e.target.value })}
              />
            </div>
            <div className ="pass">
              <label htmlFor="pass2">Confirmar a Palavra Passe </label>
              <input type="password" name="pass2" id="pass2" 
                value ={ confirmPass  }
                onInput = { ( e ) => setConfirmPass( e.target.value )}
              />
            </div>

            <BtnNormal 
              text = "Cadastrar-se"
              backColor = {colors.green1}
              width="7rem"
            />
          </div>
        </form>
      </Div>

      { showModal.warn && <Warn  text1 ="Campos vazios ! "  text2 ="Por favor, preencha todos os campos!" Icon ={ FaBan }/>}
      { showModal.warn2 && <Warn  text1 ="Palavras passes Diferentes ! "  text2 ="Por favor, verifica as palavras passes!" Icon ={ FaBan }/>}
      { showModal.load && <Loading />}
      { showModal.allow && <Allowed text ="Conta criada com sucesso !"/> }
    
    </>
  )
}



function validateInput( newUser ){
  let array =[ newUser.name ,newUser.email ,newUser.tel,newUser.morada,newUser.pass]
  const emptyInput = array.every( input => input.trim() !== "" );

  return emptyInput;
}


function validatePassWords( newUser , confir ){
    return newUser.pass === confir ;
}


