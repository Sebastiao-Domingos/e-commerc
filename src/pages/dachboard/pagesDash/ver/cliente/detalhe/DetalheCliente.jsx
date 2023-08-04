import {DivContent} from "./style"
import {useParams,useNavigate } from "react-router-dom"
import { useState , useEffect,useContext } from "react"
import {FaEdit , FaTimes , FaUser,FaComments,FaCartPlus} from "react-icons/fa"
import { Loading } from "../../../../../../components/modals/export.js"
import {ColorContext} from "../../../../../../contexts/ColorProvider";
const url = 'http://localhost/trabalhoPB/api';

export function DetalheCliente() {
    const {colors ,} = useContext(ColorContext);
    const [user , setUser ] = useState({});
    const [ quantidade ,setQuantidade] = useState(0);
    const [loader ,setLoader ] = useState(false)
    const { id} = useParams();
    const navigator = useNavigate();
    
    useEffect( ()=> {
        setLoader(() => true);
        get("clientes" , id).then( res => {
            setLoader( () =>false);
            if( res["dado"] !== "NO"){
                setUser(res["dado"]);
            }
        })

        get("compras" ,id).then( res => {
            if( res["dados"] !== "NO"){
                setQuantidade( res["dados"].length )
            }
        })
    },[])

    return (<>
        { !loader ? (
            <DivContent colors = {colors}>
                <div className="header">
                    <h2>Ver com mais o/a cliente {user.nome} </h2>
                    <div>
                        <button ><FaCartPlus/> <span>Compras</span></button>
                        <button ><FaComments/> <span>Messagens</span></button>
                        <button onClick = { () => navigator(`/dashBoard/editarCliente/${id}`)} > <FaEdit /> <span>Editar</span></button>
                        <button onClick = { () => navigator("/dashBoard/verCliente") } > <FaTimes /> <span>Sair</span></button>
                    </div>
                </div>
                <div className="body">
                    <div className="firstContent">
                        <div className="context">
                            <ul>
                                <li>ID :  { user.id} </li>
                                <li>Código : { user.nome} </li>
                                <li>Nome :  { user.email} </li>
                                <li>Estado : {user.ativado === 1 ? "Ativado" : "Desativado"}</li>
                                <li>Número de telefone : { user.telefone}</li>
                                <li>Morada : { user.morada} </li>
                                <li>Palavra passe  : { user.pass} </li>
                                <li>Quantidade  de compras : {quantidade} </li>
                            </ul>
                        </div>
                        <div className="image">
                            {<FaUser/>}
                        </div>
                    </div>
                </div>
            </DivContent>

        ) :( <Loading />) }
    </>
        
    )
}


async function get(type , id ){
    try {
       const res = await fetch(`${url}/${type}/lista/${id}`) ;
       const response = await res.json();
       return response;
    } catch (error) {
        return "ERROR";
    }
}



