import { Div} from "./style"
import {Header} from "../../buyNow/header/Header"
import {FaComments,FaTelegramPlane } from  "react-icons/fa"
import {ColorContext , UserContext} from "../../../../contexts/export.js"
import {Loading } from "../../../../components/modals/export.js"
import {useContext , useEffect , useState} from "react"
const url = 'http://localhost/trabalhoPB/api';

export  function Conversar() {
  document.title = "Conversar com a SOLEVO"
  const [mensages , setMensages ] = useState("");
  const { colors } = useContext(ColorContext);
  const {user ,} = useContext(UserContext);
  const [ mensage , setMensage ] = useState("");

  useEffect( () => {
      render();
  } ,[])

  function render(){
    getMensages( user.userdate.id ).then( res => {
      setMensages( () => res["dados"] )
    })
  }
  function send( e ){
    e.preventDefault();
    
    if( mensage ){
      
      const mens = {
        cliente:1,
        data_mensagem:getTime(),
        info:mensage,
        id_cliente:user.userdate.id
      }

      addMensage( mens ).then( res => {
        if( res ) {
          render();
          setMensage("");
        }
      })
 
    } else {
      alert("Preenche o campo");
    }
  }
  return <Div colors = { colors }>
        <Header  title = "Vamos conversar caro cliente"  Icon = { <FaComments /> }/>

        <div className="content">
            <ul>
                { mensages &&  mensages.map( (mens , index ) => {
                  if( mens.cliente === 1 ){
                    return <li className = "eu" key ={index}><span>Eu</span> 
                              <p>{mens.info }</p>
                            </li>
                  }else {
                    return <li className = "solevo" key = {index}><span>Solevo</span> 
                            <p>{mens.info}</p>
                          </li>
                  }
                })}
            </ul>

            <div className="input">
              <form onSubmit ={send}>
                <input type="text" id="chat" placeholder = "Messagem" 
                  value ={mensage}
                  onChange = { (e ) => setMensage( e.target.value ) }
                />
                <button type="submit" ><FaTelegramPlane/></button>
              </form>
            </div>
        </div>
      </Div>
}


async function getMensages( id ){
    var data = false;


    try {
        const res = await fetch(`${url}/mensagens/lista/${id}`)
        const response  = await res.json();

        data = response;

    } catch (error) {
        console.log(error);
    }

    return data;
}

async function addMensage( data ){
    var sended = false ;
    try {
      const res = await fetch(`${url}/mensagens/adicionar`,{
        method : 'POST',
        body: JSON.stringify(data)
      })
      const response = await res;

      sended = response.ok;
      
    } catch (error) {
      console.log(error);
    }

    return sended ;
}

function getTime(){
    const now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    day = ( day < 10 ) ? `0${day}` : day;
    month = (month < 10 ) ? `0${month}` : month;

    return `${year}-${month}-${day}`
}