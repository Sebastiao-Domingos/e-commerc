import {Div} from "./style"
import {ColorContext} from "../../../../../contexts/export.js"
import {useContext , useState} from "react";
import { BtnNormal} from "../../../../../components/export.js"
import { Loading ,Warn , Allowed } from "../../../../../components/modals/export.js"
const url = 'http://localhost/trabalhoPB/api';
import {FaUserAltSlash } from 'react-icons/fa'

export function Cliente() {
  const [ user ,setUser ] = useState({nome : "" , email : "" , tel: "" , morada : "" , pass1 : "", pass2 : ""})
  const [ showModal  ,setShowModal ] = useState({ allowed : false , loader :false , warn1:false,warn2:false , warn3:false});
  const { colors }  = useContext(ColorContext);

  function handleSubmit(e){
      e.preventDefault();

      if( validacao([ user.nome , user.email , user.morada , user.tel , user.pass1 , user.pass2 ]) ){
        setShowModal({...showModal , allowed : false , loader :true , warn1:false,warn2:false , warn3 : false , warn4 : false});
        
        verificarUsuario(user.email).then( res => {
          if( res["dado"] === 'not'){

            if( user.pass1 === user.pass2){
              var newData = {
                nome : user.nome,
                morada:user.morada,
                email:user.email,
                telefone:user.tel,
                pass:user.pass1
              }
              addUser( newData ).then( res => {
                console.log(res["dado"]);
                if( res["dado"] === "okay"){
                  setShowModal({...showModal , allowed : true , loader :false , warn1:false,warn2:false ,warn3 :false ,warn4:false});
  
                  setTimeout(() => {
                    setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false ,warn3 : false,warn4:false});
                    
                    setUser({...user ,nome : "" , email : "" , tel: "" , morada : "" , pass1 : "", pass2 : ""});
                    
                  }, 4000);
  
                }else{
                  setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false ,warn3 : true , warn4 : false});
                  
                  setTimeout(() => {
                    setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false ,warn3 :false , warn4 : false });
                    
                  }, 4000);
                }
              })

            }else{
              setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:true , warn3 : false , warn4 : true});
            
              setTimeout(() => {
                setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false ,warn3 :false , warn4 : false});
                
              }, 4000);
            }
          } else {
            setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:true , warn3 : false , warn4 : false});
            
            setTimeout(() => {
              setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false ,warn3 :false , warn4 : false});
              
            }, 4000);
          }
        } )
      
      } else {
        setShowModal({...showModal , allowed : false , loader :false , warn1:true,warn2:false , warn3 : false , warn4 : false});

        setTimeout(() => {
          setShowModal({...showModal , allowed : false , loader :false , warn1:false,warn2:false , warn3 : false , warn4:false});
        }, 4000);
      }
  }

  return(<>
      <Div colors = {colors}>
        <div className="header">
            <h2>Cadastar Cliente</h2>
        </div>
        <div className="body">
          <form onSubmit ={handleSubmit }>
            <div className="first">
              <div>
                <label htmlFor="nome">Nome do Cliente</label>
                <input type="text" name="nome"  id = "nome" placeholder = "Nome Completo" 
                  value = { user.nome}
                  onChange = { e => setUser({...user ,  nome:e.target.value })}
                />
              </div>  
              <div>
                <label htmlFor="email">Email do Cliente</label>
                <input type="text" name="email" id = "email" placeholder = "E-mail" 
                  value = { user.email}
                  onChange = { e => setUser({...user ,  email:e.target.value })}
                />
              </div>  
              <div>
                <label htmlFor="telefone">Número de telefone</label>
                <input type="text" name="telefone" id ="telefone"  placeholder = "Telemovel" 
                  value = { user.tel}
                  onChange = { e => setUser({...user ,  tel:e.target.value })}
                />
              </div>  
              <div>
                <label htmlFor="morada">Morada actual</label>
                <input type="text" name="morada" id = "morada"  placeholder = "Morada"  
                  value = { user.morada}
                  onChange = { e => setUser({...user , morada:e.target.value })}
                />
              </div>  
              <div>
                <label htmlFor="pass1">Palavra Passe</label>
                <input type="password" name="pass" id ="pass1"   placeholder ="Palavra Passe"
                  value = { user.pass1}
                  onChange = { e => setUser({...user ,  pass1:e.target.value })}
                />
              </div>  
              <div>
                <label htmlFor="pass2">Confirmar a Palavra Passe</label>
                <input type="password" name="confirmpass" id ="pass2"  placeholder ="Confirmar a palavra Passe"
                  value = { user.pass2}
                  onChange = { e => setUser({...user ,  pass2:e.target.value })}
                />
              </div>  
            </div>
            <div className="second">

              <BtnNormal 
                text ="Concluir com o Cadastro"
                backColor = { colors.green1}
                width = "12rem"
              />
            </div>
          </form>
        </div>
      </Div>
      {showModal.allowed && <Allowed text ="Cliente cadastrado com sucesso!" />}
      {showModal.loader && <Loading />}
      {showModal.warn1 && <Warn Icon = {FaUserAltSlash} text1 = "Tem campos vazios!" text2 ="Por favor, preencha todos os campos" />}
      {showModal.warn2 && <Warn Icon = {FaUserAltSlash} text1 = "Já Existe Cliente com este Email" text2 ="Troque o email" />}
      {showModal.warn3 && <Warn Icon = {FaUserAltSlash} text1 = "Através des alguns problemas internos" text2 ="Não foi possível cadastrar , contacte o Engenheiro" />}
      {showModal.warn4 && <Warn Icon = {FaUserAltSlash} text1 = "As palavras passes " text2 ="Devem ser guais!" />}
      
    </>
  )
  
}

function validacao( array ){
    const has = array.every( item => item !== "" );

    return has;
}
  
async function verificarUsuario( email ){
  var datas = false;

  try {
    const res = await fetch(`${url}/clientes/lista/${email}`);
    const response = await res.json();

    datas = response;

  } catch (error) {
    console.log( error );
  }

  return datas;
}

async function addUser( data ){
  var datas = false;

  try {
    const res = await fetch(`${url}/clientes/adicionar`,{
      method: 'POST',
      body: JSON.stringify(data)
    })

    const response = await res.json();

    datas = response;
  } catch (error) {
    console.log(error);
  }

  return datas;
}
