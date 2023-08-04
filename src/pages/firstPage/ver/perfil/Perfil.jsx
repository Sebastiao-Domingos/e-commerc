import { Div } from "./style";
import {Header} from "../../buyNow/header/Header"
import {useContext , useState ,useEffect ,useReducer} from "react";
import {UserContext , ColorContext  } from "../../../../contexts/export"
import {BtnNormal } from "../../../../components/export.js"
import { Loading , Allowed } from "../../../../components/modals/export.js"
import {FaUserAlt , FaTimes} from "react-icons/fa";
import {Link , useNavigate  } from "react-router-dom"
const url = 'http://localhost/trabalhoPB/api';

export function Perfil() {
  document.title = "Meu Perfil";
  const {user , setUser } = useContext(UserContext);
  const { colors , } = useContext(ColorContext);
  const [date ,setDate ] = useState(user.userdate);
  const [ userInputs , setUserInputs] = useState(user.userdate);
  const [qntCompras ,setQntCompras ] = useState(0);
  const navigator = useNavigate();

  function reducer( state , action ){
    switch (action) {
      case "loader":
        return {...state , loader : true , confirm : false , perfil : false}
      case "confirm":
        return {...state , loader : false , confirm : true, perfil : false}
      case "update":
        return {...state , loader : false , confirm : false , perfil : false}
      default:
        return {...state , loader : false , confirm : false , perfil : true}
    }
  }
  const [state, dispatch] = useReducer(reducer , {loader : false , confirm : false , perfil : true})

  useEffect( ( ) => {
    getCompras( user.userdate.id ).then(res => {
      if( res !==  "error ")
        setQntCompras( ( ) =>  ( res.length < 10 ) ? `0${res.length}` : res.length  );
    })
  } , [])


  function atualizar( e ){
    e.preventDefault();

    dispatch("loader");
    updateUser( userInputs, userInputs.id ).then( res => {
      if( res.dado === 'okay'){
        dispatch("confirm");

        setTimeout(() => {
          render( user.userdate.id )
          dispatch("");
        }, 1200);
      }
    })

  }

  function render( id ){
    getUser( id ).then( res => {
      setUser({ ...user , userdate : res});
      setDate( () => res);
    })
  }


  return (<>
        <Div colors = {colors}>
          { state.perfil ? (
            <div className="perfil">
              <div className = "fundo">
                <FaUserAlt />
              </div>
              <Header title = "O meu perfil" />

              <div className="button">
                <button className = "btnVoltar"  onClick = { () => navigator("/")}> <FaTimes /></button>
                <BtnNormal 
                  text = "Editar"
                  width= "8rem"
                  backColor = {colors.green1}
                  event = { () => dispatch("update") }

                />
              </div>

              <ul>
                <li>Nome : { date.nome}</li>
                <li>Número de Telefone : {date.telefone}</li>
                <li>Email : {date.email}</li>
                <li>Morada : {date.morada}</li>
                <li>Número de Compras : {qntCompras}</li>
              </ul>
            </div>
          ) : (
            <div className="atualizar">
              <Header title = "Atualizar o meu Perfil" />
              <button className = "btnVoltar" onClick = { () => dispatch("") }  ><FaTimes /></button>
              <div className="form">
                <form action="">
                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome"  required
                      value = { userInputs.nome}
                      onChange = { e => setUserInputs( {...userInputs ,nome : e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="tel">Número de Telefone</label>
                    <input type="text" name="tel" id="tel" required 
                      value = { userInputs.telefone}
                      onChange = { e => setUserInputs( {...userInputs , telefone : e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required 
                      value = { userInputs.email}
                      onChange = { e => setUserInputs( {...userInputs , email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="morada">Morada</label>
                    <input type="text" name="morada" id="morada" required 
                      value = { userInputs.morada}
                      onChange = { e => setUserInputs( {...userInputs , morada: e.target.value})}
                    />
                  </div>

                  <BtnNormal 
                    text = "Salvar"
                    width= "8rem"
                    backColor = { colors.green1}
                    event = { atualizar }
                  />
                </form>
              </div>
            </div>
          )}

          { state.loader && <Loading />}
          {state.confirm && <Allowed text = "Dados atualizados com sucesso" />}
        </Div>
        
    </>
  )
}

async function getCompras( id ) {
    try {
      const res = await fetch(`${url}/compras/lista/${id}`);
      const response = await res.json();

      return response["dados"];
    } catch (error) {
      console.log(error);
      return "error";
    }

}

async function getUser( id ) {
  try {
    const res = await fetch(`${url}/clientes/lista/${id}`);
    const response = await res.json();

    return response["dado"];
  } catch (error) {
    console.log(error);
    return "error";
  }

}
async function updateUser( newDate , id ){
    try {
      const res = await fetch(`${url}/clientes/atualizar/${id}` , {
        method : 'PUT',
        body : JSON.stringify(newDate )
      })

      const response = await res.json();
      return response;
    } catch (error) {
      return "error"
    }
}


