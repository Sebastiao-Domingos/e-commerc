import { ColorContext,UserContext } from '../../../contexts/export.js'
import { BtnNormal } from '../../export.js'
import {Div} from './style'
import { Loading, Warn ,Allowed } from "../export.js"
import {Link,Navigate } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import axios from 'axios'
import {FaBan , FaUserAltSlash } from 'react-icons/fa'

export default function SignInModal() {
  const [ dataUser , setDataUser ] = useState({email : '', pass:'' });
  const [users,setUsers ] = useState([]);
  const { colors } = useContext(ColorContext);
  const { user , setUser } = useContext(UserContext);
  const [ showModal , setShowModal  ] = useState({ load: false , allow:false , warn:false,warn2:false } );


  useEffect( () => {
    axios.get("http://localhost:3030/users")
    .then( res =>  setUsers( res.data ) )
    .catch( err => console.log( err ) );

  },[])

  function handleLogin( e ){
    e.preventDefault();
    const response = validateDate( users , dataUser );

    if( validateEmptyInput( [dataUser.email , dataUser.pass ] ) ){
      
      if( response.hasUser ) {
        
        setShowModal({...showModal , load:true });
        setTimeout(() => {
          setShowModal({...showModal , load:false, allow:true });

          setTimeout(() => {
            setShowModal({...showModal , load:false, allow:false,warn:false,warn2:false });
            setUser({ ...user, userdate : response.user , logged : true} );
          }, 2000);
          
        }, 3000);

      }else {
        setShowModal({...showModal , load:true })
        setTimeout(() => {
          setShowModal({...showModal ,load : false,warn:true });
          
          setTimeout(() => {
              setShowModal({...showModal , load:false, allow:false,warn:false,warn2:false });
          }, 4000);
          
        }, 1500);
      }

    }else {
      setShowModal({...showModal ,warn2:true });
      setTimeout(() => {
        setShowModal({...showModal , load:false, allow:false,warn:false,warn2:false });
      }, 4000);
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
            <p>Se não tens conta, <Link to ="/inicial/signup">click aqui </Link></p>
          </div>
        </form>
      </div>

      { user.logged && <Navigate to ="/" />}

    </Div>
    { showModal.load && <Loading /> }
    { showModal.allow && <Allowed  user /> }
    { showModal.warn && <Warn 
      text1="Dados Inválidos ! "
      text2 ="Por favor, verifica o teu email e a palavra passe."
      Icon = { FaUserAltSlash }
    /> }
    { showModal.warn2 && <Warn 
      text1="Campos vazios!"
      text2 ="Por favor, preencha todos os campos!"
      Icon = { FaBan }
    
    /> }

  </>
  )
}



function validateDate(users , userDate ){
  let user ={}  , has = false;
  const hasUser = users.some( ( userdate ) => {
    if( userdate.email === userDate.email && userdate.pass === userDate.pass  ){
      user = userdate;
      has = true;
    } 
    return has ;
  })
  return {  hasUser ,  user };
}


function validateEmptyInput(array ){

   const hasEmptyInput= array.every( input => input.trim() !== "");

   return hasEmptyInput;
}
