import {Div} from "./style"
import { Loading  , Confirm , Warn , Allowed } from "../../../../../components/modals/export.js"
import { ColorContext } from "../../../../../contexts/export.js"
import { FaEdit , FaTrash , FaBookReader ,FaUserCircle , FaCheck , FaTimes } from "react-icons/fa"
import { Link , useNavigate } from 'react-router-dom'
import { useContext , useEffect , useState , useReducer } from "react";
import {FaUserAltSlash } from 'react-icons/fa'
const url = 'http://localhost/trabalhoPB/api';


export function VerCliente() {
  
  const {colors ,} = useContext(ColorContext );
  const [users , setUsers ] = useState('');
  const [ newUser ,setNewUser ] = useState("");
  
  function reducer( state , action){
      switch (action) {
        case "loader":
          return { ...state , loader : true, confirm : false, warn:false , allowed:false }
        case "confirm":
          return { ...state , loader : false, confirm : true, warn:false , allowed:false }
        case "warn":
          return { ...state , loader : false, confirm : false, warn:true , allowed:false }
        case "allowed":
          return { ...state , loader : false, confirm : false, warn:false , allowed:true }
        default:
          return { ...state , loader : false, confirm : false, warn:false , allowed:false }
      }
  }

  const [state, dispatch] = useReducer(reducer , {loader : false, confirm : false, warn:false , allowed:false});

  useEffect( () => {
    render();
  },[])


  function render(){
    getUsers( null ).then( res => {
      setUsers( () => res["dados"] );
    })

  }

  function handleActive( cond , data  ){
    data.ativado = cond;
    setNewUser( () => data );
    dispatch("confirm")
  }  

  function confirmToDelete( confirmed ){
    setNewUser({...newUser , ativado : confirmed });
    
    if( confirmed && newUser !== "" ){
      dispatch("loader");

      updateUser( newUser.id , newUser ).then( res => {
        if( res["dado"] === "okay" ){
          dispatch("allowed");

          setTimeout(() => {
            dispatch();
          }, 4000);

          render();
        }else {
          dispatch("warn");

          setTimeout(() => {
            dispatch();
          }, 4000);
        }
      })

    } else{
      dispatch()
    }
  }

  return ( <> 
      { users ? (
        <Div colors = {colors}>
          <div className="header">
            <h2>Clientes</h2>
          </div>
    
          <div className="body">
            <table>
              <thead>
                <tr>
                  <td>Avatar</td>
                  <td>Nome</td>
                  <td>Email</td>
                  <td>Ver Mais</td>
                  <td>Editar</td>
                  <td>Estado</td>
                </tr>
              </thead>

              <tbody>
                { users.map( ( user , index ) => {
                  if( index !== 1){
                    return <tr key = { index }>
                      <td>{<FaUserCircle />}</td>
                      <td>{user.nome}</td>
                      <td>{user.email}</td>
                      <td>
                          <Link to = {`${user.id}`}> <FaBookReader />  <span>Ver com Detalhes</span> </Link>
                      </td>
                      <td>
                          <Link to = {`/dashBoard/editarCliente/${user.id}`}><FaEdit />  <span>Editar o Cliente</span> </Link>
                      </td>
                      <td>
                          { user.ativado ? (
                            <button onClick = { () => handleActive( false ,user )}><FaCheck />  <span>Desativar o Cliente</span> </button> 
                          ) : (
                            <button  onClick = { () => handleActive( true , user )}  style = { {color : "#be5a5a"} } ><FaTimes />  <span>Ativar o Cliente</span> </button> 
                          ) }
                      </td>
                    </tr>
                  } 
                })}
              </tbody>
            </table>
          </div>
        </Div>

      ) : (
        <Loading />
      )}
      { state.loader && <Loading />}
      {state.allowed && <Allowed text = "Cliente eliminado com sucesso!" />}
      {state.warn && <Warn Icon ={FaUserAltSlash} text1 = "Não consiguimos eliminar"  text2 = "Houve um problema!"/>}
      {state.confirm && <Confirm  text = "Pretendes eliminar, o Cliente?" 
        event1 ={ () => confirmToDelete(  true )  }
        event2 = { ()  => confirmToDelete( false ) }
      />}
  </>
  )
}

async function getUsers( id ) {
    var data = false;

    try {
        var res = "";
        if( id === null ){
           res = await fetch(`${url}/clientes/lista`);
        }else{
           res = await fetch(`${url}/clientes/lista/${id}`);
        }
        const response = await res.json();

        data = response;
    } catch (error) {
      console.log(error);
    }

    return data;
}

async function updateUser( id , newData ){
  var datas = false;
  console.log(newData);

  try {
      const res = await fetch(`${url}/clientes/atualizar/${id}`,{
        method : 'PUT',
        body : JSON.stringify(newData)
      });
      const response = await res.json();

      datas = response;

      
  } catch (error) {
      console.log( error );
  }

  return datas;
}