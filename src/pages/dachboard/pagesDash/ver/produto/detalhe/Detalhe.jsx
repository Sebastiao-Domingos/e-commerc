import {Div} from "./style"
import {ColorContext} from "../../../../../../contexts/ColorProvider"
import {Loading } from "../../../../../../components/modals/export.js"
import {useParams , useNavigate } from "react-router-dom"
import { useEffect ,useState,useContext } from 'react'
import { FaTimes, FaEdit} from "react-icons/fa"
const url = 'http://localhost/trabalhoPB/api';

export function Detalhe({ type }) {
  const {colors } = useContext( ColorContext );

  const [ products , setProducts ] = useState("");
  const [ quered ,setQuered ] = useState(false);
  const [ typeProduct , setTypeProduct ] = useState();
  const [ product , setProduct ] = useState("");
  const [ precaussoes , setPrecaussoes ] = useState([]);
  const navigator = useNavigate();

  const { id } = useParams();

  useEffect( () => {
    getProducts(id).then( res => {
      setProduct( () =>  res["dado"] );
      const precau = res['dado'].precaussoes.split("|");
      setPrecaussoes( precau);
    })
  },[])


  return (<>
    { product ? (
        <Div colors = { colors }>
          <div className="header">
              <h2>Ver com mais detalhes o/a {product && product.tipo} {product && product.nome} </h2>
              <div>
                <button onClick = {() => navigator(`/dashBoard/verProduto/editar/${id}`) }> <FaEdit /></button>
                <button onClick = { () => navigator(`/dashBoard/verProduto/${product.tipo}`) } > <FaTimes /></button>
              </div>
          </div>

          <div className="body">
            <div className="firstContent">
              <div className="context">
                  <ul>
                    <li>ID :  { product.id} </li>
                    <li>Código : { product.codigo} </li>
                    <li>Nome :  { product.nome} </li>
                    <li>Estado : {product.ativado === 1 ? "Ativado" : "Desativado"}</li>
                    <li>Preço : { product.preco} , 00 Kz </li>
                    <li>Classificação : { product.stars} Estrelas </li>
                    <li>Nome do Fabbricante : { product.fabricante} </li>
                    <li>Data de fabricação : { product.data_fabrico} </li>
                    <li>Data de Validade  : { product.data_validade} </li>
                    <li>Quantidade : {product.quantidade }</li>
                  </ul>
              </div>
              <div className="image">
                  <img src={ product.foto} alt="foto do produto" />
              </div>
            </div>
            <div className="secondContent">
              <h3>Mais Informações</h3>
              <p>{product.info}</p>
            </div>
            <div className="thirdContent">
              <h3>Precaussões</h3>
              <ol>
                { precaussoes && precaussoes.map( (precaussao , index ) =>{
                  return <li key = {index}> {precaussao}</li>
                } ) }
              </ol>
            </div>
          </div>
      </Div>
    ):(
      <Loading />
    )}
  </>
    
  )
}

async function getProducts(id){

  try {
      const res = await fetch(`${url}/produtos/lista/${id}`);
      const response = await res.json();
      return response;
  } catch (error) {
      console.log(error);
      return "No";
  }

}


