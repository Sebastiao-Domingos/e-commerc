import { Div }  from "./style"
import {Header} from "../../buyNow/header/Header"
import {ColorContext , UserContext} from "../../../../contexts/export.js"
import {Loading , Allowed} from "../../../../components/modals/export.js"
import {useContext , useEffect  , useState , useReducer } from "react"
import {Link } from "react-router-dom";
import {FaCoins , FaTrash} from "react-icons/fa"
const url = 'http://localhost/trabalhoPB/api';


export function Compras() {
  document.title = "Minhas Compras"
  const { colors , } = useContext(ColorContext )
  const { user , } = useContext(UserContext);
  const [ compras ,setCompras ] = useState([]);


  function reducer( state , action ){
    switch (action) {
      case "loader":
        return {...state , loader:true , allowed:false}; 
      case "allowed":
        return {...state , loader:false , allowed:true}; 
      default:
        return {...state , loader:false , allowed:false}; 
    }
  }
  const [state, dispatch] = useReducer(reducer,{ loader : false , allowed : false })


  useEffect( () =>{
    render();
  },[])

  function render(){
    getCompras( user.userdate.id ).then( res => {
      setCompras( () => res["dados"])
    });
  }

  function eliminar( id ){
      var date = compras.filter( item => item.id === id);
      date[0].ativado = 0;

      dispatch("loader");
      update( id, date[0] ).then( res => {
        if( res['dado'] === "Atualizados com sucesso!"){
          
          dispatch("allowed");
          render();
          setTimeout(() => {
            dispatch();
          }, 1200);
        }
      })

  }
  return (<>
      { compras ?  ( 
        <Div colors = {colors}>
        <Header  title = "As minhas compras"/>

        <div className="container">
          <div className="compras">
            <table>
              <thead>
                <tr>
                  <td>Código</td>
                  <td>Data da compra</td>
                  <td>Tipo de compra</td>
                  <td><span>{<FaCoins />}</span> Preço em Kz</td>
                  <td>Ver com Detalhe</td>
                  <td>Eliminar</td>
                </tr>
              </thead>
              <tbody>
                { compras.map( ( item , index ) => { 
                    if( item.ativado )
                      return <tr key = {index}>
                        <td>{item.codigo}</td>
                        <td>{ item.data_compra }</td>
                        <td>{ item.tipo_pagamento }</td>
                        <td> {item.valor},00</td>
                        <td><Link to = { `/compras/${item.id}`}>Ver mais...</Link></td>
                        <td> <button onClick = { () => eliminar( item.id )} ><FaTrash /></button></td>
                      </tr>
                })}
              </tbody>
            </table>
          </div>

        </div>
      </Div>
      ) : ( < Loading />)}
      { state.loader && <Loading />}
      { state.allowed && <Allowed text = "Compra eliminada com sucesso!"/>}
    </>
  )
}


async function getCompras( id ){
  var datas = false;
  
  try {
    const res = await fetch(`${url}/compras/lista/${id}`);
    
    const response = await res.json();

    datas = response;

  } catch (error) {
    console.log( error );
  }

  return datas;
}

async function update( id , date){

  try {
    const res = await fetch(`${url}/compras/atualizar/${id}`,{
      method:'PUT',
      body:JSON.stringify(date)
    })

    const response = res.json();

    return response;
  } catch (error) {
    return "error"
  }
}