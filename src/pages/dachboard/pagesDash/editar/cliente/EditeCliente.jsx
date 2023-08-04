import {ColorContext} from '../../../../../contexts/export.js'
import {useContext,useEffect ,useState,useReducer} from "react"
import {useParams , useNavigate } from "react-router-dom"
import {FaTimes} from "react-icons/fa"
import {DivEdite} from "./style"
import BtnNormal from "../../../../../components/buttons/BtnNormal"
import {Loading , Warn , Allowed } from "../../../../../components/modals/export.js"
const url = 'http://localhost/trabalhoPB/api';

export function EditeCliente() {
    const {colors} = useContext(ColorContext);
    const [data , setData] = useState({});
    const {id} = useParams();
    const navigator = useNavigate();

    function reducer(state ,action){
        switch (action) {
            case "load":
                return {...state,load:true,allow:false,warn1 :false, warn:false}
            case "warn":
                return  {...state,load:false,allow:false,warn1 :false, warn:true}
            case "warn1":
                return  {...state,load:false,allow:false,warn1 :true, warn:false}
            case "allow":
                return {...state,load:false,allow:true,warn1 :false, warn:false}
            default:
                return {...state,load:false,allow:false,warn1 :false, warn:false}
        }
    }
    const [state, dispatch] = useReducer(reducer, {load:false,allow:false,warn1 :false, warn:false})

    useEffect( ()=>{

        dispatch("load");
        get(id).then( res =>{
            if( res !== "NO"){
                setData({
                    nome:res.nome,
                    email:res.email,
                    telefone:res.telefone,
                    morada:res.morada,
                    pass1:res.pass,
                    pass2:res.pass
                })

                dispatch();
            }
        })
    },[])
    


    function handleSave(e){
        e.preventDefault();

        if( data.pass1 === data.pass2){
            dispatch("load");
            const newDate = {
                nome:data.nome,
                morada:data.morada,
                email:data.email,
                telefone:data.telefone,
                pass:data.pass1,
            }

            upDate( newDate , id).then( res => {

                if(res==="okay"){
                    dispatch("allow");

                    setTimeout(() => {
                        dispatch();

                        navigator("/dashBoard/verCliente")
                    }, 2000);

                }else {
                    dispatch("warn");

                    setTimeout(() => {
                        dispatch();
                    }, 2000);
                }
            })
        }else{
            dispatch("warn1")

            setTimeout(() => {
                dispatch();
            }, 1600);
        }   
    }


    function handleKeepData(e){
        e.preventDefault();
        navigator("/dashBoard/verCliente");
    }
    return (<>
        <DivEdite colors = {colors}>
            <div className="header">
                <h2>Editar o  Cliente {data && data.nome}</h2>
                <button onClick = { () => navigator("/dashBoard/verCliente")}><FaTimes /></button>
            </div>
            <div className="body">
            <form >
                <div className="first">
                <div>
                    <label htmlFor="nome">Nome do Cliente</label>
                    <input type="text" name="nome"  id = "nome" placeholder = "Nome Completo" 
                    value = { data.nome}
                    onChange = { e => setData({...data ,  nome:e.target.value })}
                    />
                </div>  
                <div>
                    <label htmlFor="email">Email do Cliente</label>
                    <input type="text" name="email" id = "email" placeholder = "E-mail" 
                    value = { data.email}
                    onChange = { e => setData({...data ,  email:e.target.value })}
                    />
                </div>  
                <div>
                    <label htmlFor="telefone">Número de telefone</label>
                    <input type="text" name="telefone" id ="telefone"  placeholder = "Telemovel" 
                    value = { data.telefone}
                    onChange = { e => setData({...data ,  tel:e.target.value })}
                    />
                </div>  
                <div>
                    <label htmlFor="morada">Morada actual</label>
                    <input type="text" name="morada" id = "morada"  placeholder = "Morada"  
                    value = { data.morada}
                    onChange = { e => setData({...data , morada:e.target.value })}
                    />
                </div>  
                <div>
                    <label htmlFor="pass1">Palavra Passe</label>
                    <input type="password" name="pass" id ="pass1"   placeholder ="Palavra Passe"
                    value = { data.pass1}
                    onChange = { e => setData({...data ,  pass1:e.target.value })}
                    />
                </div>  
                <div>
                    <label htmlFor="pass2">Confirmar a Palavra Passe</label>
                    <input type="password" name="confirmpass" id ="pass2"  placeholder ="Confirmar a palavra Passe"
                    value = { data.pass2}
                    onChange = { e => setData({...data ,  pass2:e.target.value })}
                    />
                </div>  
                </div>
                <div className="second">
                <BtnNormal 
                    event = {handleSave }
                    text ="Salvar as alterações"
                    backColor = { colors.green1}
                    width = "12rem"
                />
                <BtnNormal 
                    event = { handleKeepData }
                    text ="Manter os dados"
                    backColor = { colors.green1}
                    width = "12rem"
                />
                </div>
            </form>
            </div>
        </DivEdite>
        {state.load && <Loading />}
        {state.allow && <Allowed text = "Dados atualizados com sucesso!"/>}
        {state.warn && <Warn text1 ="Houve um Erro" text2 = "Contactaum especialista"/>}
        {state.warn1 && <Warn text1 ="As palavras passes " text2 = "Devem ser iguais!"/>}
    </>
  )
}


async function get(id){
    try {
        const res = await fetch(`${url}/clientes/lista/${id}`);
        const response = await res.json();
        return response["dado"];
    } catch (error) {
        return "NO";
    }
}

async function upDate( newData , id){
    try {
        const res = await fetch(`${url}/clientes/atualizar/${id}`,{
            method:'PUT',
            body:JSON.stringify(newData)
        })

        const response = await res.json();
        return response["dado"];
    } catch (error) {
        return "NO";
    }
}