import {DivEdite} from "./style"
import{FaCamera,FaTimes} from "react-icons/fa"
import {useContext, useState , useEffect,useRef,useReducer} from "react"
import { useNavigate , useParams} from "react-router-dom"
import {ColorContext} from "../../../../../contexts/ColorProvider"
import {Loading,Allowed,Warn } from "../../../../../components/modals/export.js"
const url = 'http://localhost/trabalhoPB/api';

export function EditeProduto({titulo}) {
    const {colors ,} = useContext(ColorContext);
    const [product ,setProduct ] = useState({});
    const [data, setData ] =useState({nome:"",codigo:"",data_fab:"",data_val:"",fabricante:"",foto:"",info:"",prec1:"",prec2:"",prec3:"",prec4:"",preco:0,quantidade:0})
    const {id} = useParams();
    const fotoRef = useRef();
    const navigator = useNavigate();

    function reducer( state,action){
        switch (action) {
            case "loader":
                return {...state , load:true,warn:false,allow:false};
            case "allowed":
                return {...state , load:false,warn:false,allow:true};
            case "warn":
                return {...state , load:false,warn:true,allow:false};
            default:
                return {...state , load:false,warn:false,allow:false};
        }
    }
    const [state, dispatch] = useReducer(reducer,{load:false,warn:false,allow:false})
    

    useEffect( ()=> {
        get(id).then( res =>{
            setProduct( res);
            const precs = res.precaussoes.split("|");
            setData({...data ,nome:res.nome,codigo:res.codigo, preco:res.preco, data_fab:res.data_fabrico,data_val:res.data_validade,fabricante:res.fabricante,quantidade:res.quantidade,prec1:precs[0],prec2:precs[1],prec3:precs[2],prec4:precs[3],info:res.info})
        })
    },[])

    function handleUpdate(e){
        e.preventDefault();

        dispatch("loader");
        const image =fotoRef.current;
        const reader = new FileReader();
        reader.onload = function(){
            var photo = reader.result || product.foto ;
            upDateProduct(photo);
        }
        if(image.files[0]) reader.readAsDataURL(image.files[0]);
        else upDateProduct(product.foto);   
    }

    function handleLast(e){
        e.preventDefault();
        navigator(`/dashBoard/verProduto/${product.tipo}`);
    }

    function upDateProduct(photo){
        
        const newData = {
            id:product.id,
            nome:data.nome,
            foto:photo,
            codigo:data.codigo,
            preco:data.preco,
            data_fabrico:data.data_fab,
            data_validade:data.data_val,
            info:data.info,
            precaussoes:`${data.prec1}|${data.prec2}|${data.prec3}|${data.prec4}`,
            fabricante:data.fabricante,
            ativado:product.ativado,
            stars:product.stars,
            quantidade:data.quantidade
        }

        upDate( newData , id ).then( res => {
            if(res ==="okay"){
                dispatch("allowed");

                setTimeout(() => {
                    dispatch();
                }, 4000);

            navigator(`/dashBoard/verProduto/${product.tipo}`);
            }else{
                dispatch("warn");

                setTimeout(() => {
                    dispatch()
                }, 2000);
            }
        })
    }

  return (<>
        { product ? (
            <DivEdite colors = {colors}>
               <div className="header">
                   <h2>Editar {product.nome}</h2>
                   <button onClick ={ () => navigator(`/dashBoard/verProduto/${product.tipo}`)}><FaTimes /></button>
               </div>
               <div className="body">
                   <form >
                       <div className = "first">
                           <div>
                               <label htmlFor="nome">Nome do Produto</label>
                               <input type="text" name="nome  " className ="input1" id="nome" placeholder = "Nome" 
                                   value = { data.nome}
                                   onChange ={ e  => setData( {...data , nome : e.target.value }) }
                               />
                           </div>
                           <div>
                               <label htmlFor="codigo">Código do Produto</label>
                               <input type="text" name="codigo" className ="input2" id="codigo" placeholder = "Código" 
                                   value = { data.codigo }
                                   onChange ={ e  => setData( {...data , codigo: e.target.value }) }
                               />
                           </div>
                           <div>
                               <label htmlFor="preco">Preço Unitário do Produto</label>
                               <input type="number" name="preco" className ="input1"  id="preco" placeholder = "Preço" 
                                   value = { data.preco}
                                   onChange ={ e  => setData( {...data , preco : e.target.value }) }
                               />
                           </div>
                           <div>
                               <label htmlFor="data_fab">Data de fabricação do Produto</label>
                               <input type="date" name="data_fab" className ="input2"  id="data_fab" placeholder = "Data de fabricação" 
                                   value = { data.data_fab}
                                   onChange ={ e  => setData( {...data ,data_fab : e.target.value }) }
                               />
                           </div>
                           <div>
                               <label htmlFor="data_val">Data de Validade do Produto</label>
                               <input type="date" name="data_val  " className ="input2"  id="data_val" placeholder = "Data de Validade" 
                                   value = { data.data_val}
                                   onChange ={ e  => setData( {...data , data_val: e.target.value }) }
                               />
                           </div>
                           <div>
                               <label htmlFor="fabricante">Nome do Fabricante</label>
                               <input type="text" name="fabricante" className ="input1"  id="fabricante" placeholder = "Nome do Fabricante" 
                                   value = { data.fabricante}
                                   onChange ={ e  => setData( {...data ,fabricante : e.target.value }) }
                               />
                           </div>
                       </div>
                       <div className = "div_foto">
                           <div>
                               <label htmlFor="data_val">Quantidade de Produto</label>
                               <input type="number" name="quantidade" className ="quantidade"  id="quantidade" placeholder = "Quantidade de Produto" 
                                   value = { data.quantidade}
                                   onChange ={ e  => setData( {...data , quantidade: e.target.value }) }
                                   />
                           </div>
                           <div className = "foto">
                               <label htmlFor="foto">Seleciona a Foto do Produto</label>
                               <input type="file" name="foto" id="foto"  placeholder = "Foto do produto"
                                   ref = {fotoRef}
                                   value ={data.foto}
                                   onChange = { e => setData( {...data , foto : e.target.value })}
                               />
                               <label htmlFor="foto" id = "camera" ><FaCamera /></label>
                               <img src={product.foto} alt="" />
                               
                           </div>
                       </div>
                       <div className="second">
                           <h4>Precaussões</h4>
       
                           <div className="precaussoes">
                               <div>
                                   <label htmlFor="primeira">1 ) Precaussão</label>
                                   <input type="text" name = "primeira" id ="primeira"   placeholder = "1 )" 
                                       value = {data.prec1}
                                       onChange = {  e  => setData({...data , prec1 : e.target.value } )}
                                   />
                               </div>
                               <div>
                                   <label htmlFor="segunda">2 ) Precaussão</label>
                                   <input type="text" name = "segunda" id = "segunda"   placeholder = "2 )" 
                                       value = {data.prec2}
                                       onChange = {  e  => setData({...data , prec2: e.target.value } )}
                                   />
                               </div>
                               <div>
                                   <label htmlFor="">3 ) Precaussão</label>
                                   <input type="text" name = "terceira"  id  = "terceira" placeholder = "3 )" 
                                       value = {data.prec3}
                                       onChange = {  e  => setData({...data , prec3: e.target.value } )}
                                   />
                               </div>
                               <div>
                                   <label htmlFor="quarta">4 ) Precaussão</label>
                                   <input type="text" name = "quarta"  id = "qaurta" placeholder = "4 )" 
                                       value = {data.prec4}
                                       onChange = {  e  => setData({...data , prec4: e.target.value } )}
                                   />
                               </div>
                           </div>
       
                           <h4>Mais sobre o Produto</h4>
                           <textarea 
                               name="informacao" 
                               id="info" cols="30" 
                               rows="10"   placeholder  = "Escrever mais informarções sobre o producto em causa..."
                               value = {data.info}    
                               onChange = { e => setData( {...data , info : e.target.value } ) }
                           > digite aqui </textarea>
                       </div>
                       <div className="buttonsEdit">
                            <button type="submit" onClick ={ handleUpdate } >Salvar as Alterações</button>
                            <button type="submit" onClick ={ handleLast }>Manter os dados</button>
                       </div>
                   </form>
               </div>
           </DivEdite>
        ):( <div>Ola</div> )}
        {state.load && <Loading />}
        {state.allow && <Allowed text ="Produto atualizado com sucesso!" />}
        {state.warn && <Warn  text1 ="Error durante a atualização" text2="Contacte um especialista!"/> }
  </>)
}

async function get(id){
    try {
       const res = await fetch(`${url}/produtos/lista/${id}`)
       const response = await res.json();
       
       return response["dado"];
    } catch (error) {
        return "NO";
    }
}

async function upDate(newData,id){
    try {
        const res = await fetch(`${url}/produtos/atualizar/${id}`,{
            method:"PUT",
            body:JSON.stringify(newData)
        })

        const response = await res.json();

        return response["dado"];
    } catch (error) {
        return "No"
    }
}


