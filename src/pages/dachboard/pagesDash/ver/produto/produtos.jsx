import {useContext , useState  ,useEffect ,useReducer} from 'react'
import axios from "axios"
import {Div} from "./style"
import {ColorContext } from "../../../../../contexts/export.js"
import { userDatas } from './Data.js'
import { Loading , Allowed , Warn} from "../../../../../components/modals/export.js"
import { FaEdit , FaTrash , FaBookReader , FaCheck , FaTimes } from "react-icons/fa"
import { Link , useNavigate } from 'react-router-dom'
const url = 'http://localhost/trabalhoPB/api';
import { GraphicBar } from "../../../graficos/bar/Bar";


export function VerProduto( {type }) {
    const [products ,setProducts ] = useState("");
    const [ typeProduct , setTypeProduct ] = useState();
    const [show , setShow ] = useState({ estado : false , type : ""});

    const { colors } = useContext(ColorContext);
    const navigator = useNavigate();


    function reducer( state , action ){
        switch ( action ) {
            case "loader":
               return {...state ,loader :true , warn : false , confirm : false , allowed:false };
            
            case "confirm":
                return {...state ,loader :false, warn : false , confirm : true , allowed:false };
    
            case "warn":
                return {...state ,loader :false , warn : true , confirm : false , allowed:false };
    
            case "allowed":
                return {...state ,loader :false , warn : false , confirm : false , allowed:true};
                
            default:
                return {...state ,loader :false , warn : false , confirm : false , allowed:false};       
        }
    }
    
    const [state, dispatch] = useReducer( reducer , { loader :false , warn : false , confirm : false , allowed:false});
    

    useEffect( () => {
        setTypeProduct( type );

        render( type );
    },[])

    function render( type ){
       getProdutos( type.toLowerCase() ).then( res => {
            setProducts( () => res);
        })
    }

    function handleSelect( e ) {
        const value = e.target.value ;

        if( value !== 'none'){
            setShow({...show,estado: true , type :value});
        } else {
            setShow({...show,estado: false , type :value});
        }
    }

    function ativar( product , cond ){
        product.ativado = cond;

        dispatch("loader");
        updateProduto( product.id , product ).then( res => {
            if(res["dado"] === 'okay'){
                render( type );
                
                dispatch("allowed");
                
                setTimeout(() => {
                    dispatch();
                }, 3000);
            } else {
                dispatch("warn");

                setTimeout(() => {
                    dispatch();
                }, 4000);
            }
        })
    }

    return (<>
        { products ? (<Div colors = {colors}>
            <div className="header">
                <h2>{typeProduct}s</h2>
                <p>Gráficos
                    <select name="graficos" id="graficos" onClick = { handleSelect }>
                        <option value="none">Visual</option>
                        <option value="Bar">Barras</option>
                        <option value="Circulo">Circulo</option>
                        <option value="Linhas">Linhas</option>
                    </select>
                </p>
            </div>
            { !show.estado ? (
                <div className="body">
                    <table>
                        <thead>
                            <tr>
                                <td>Foto</td>
                                <td>Nome do Produto </td>
                                <td>Preço Unitário</td>
                                <td>Ver Mais</td>
                                <td>Editar</td>
                                <td>Estado</td>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map( ( product , index ) => (
                                <tr key = {index}>
                                    <td> <img src={ product.foto} alt="Produto" /></td>
                                    <td>{product.nome}</td>
                                    <td>{product.preco},00 Kz</td>
                                    <td>
                                        <Link to = {`${product.id}`}> <FaBookReader />  <span>Ver com Detalhes</span> </Link>
                                    </td>
                                    <td>
                                        <Link to = {`/dashBoard/verProduto/editar/${product.id}`}><FaEdit />  <span>Editar o produto</span> </Link>
                                    </td>
                                    <td>
                                        { product.ativado ? (
                                            <button onClick = { () => ativar( product , false )}><FaCheck />  <span>Desativar</span></button>
                                        ) : (
                                            <button onClick = { () => ativar( product , true )} style={ {color:"#be5a5a"}}><FaTimes />  <span>Ativar</span></button>
                                        )} 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <GraphicBar datas = { products } type = { show.type } />
            )}
        </Div>): (
            <Loading />
        )}
        { state.loader  && <Loading />}
        { state.warn  && <Warn   Icon ={FaTimes } text1 ="Não foi possivel eliminar" text2 = "Procure um especialista" />}
        { state.allowed  && <Allowed text = "Acção Foi bem sucedida!"/>}
    </>)
}


async function getProdutos( type ){
    var data = false;

    try {
        const res = await fetch(`${url}/produtos/lista/${type}`);
        const response = await res.json();

        data = response["dados"];
    } catch (error) {
        console.log(error);
    }

    return data;
}


async function updateProduto( id, newData ){
    var datas = false;

    try {
        const res = await fetch(`${url}/produtos/atualizar/${id}`,{
            method : 'PUT',
            body : JSON.stringify(newData)
        })

        const response = await res.json();

        datas = response;
    } catch (error) {
        console.log(error);
    }

    return datas;
}