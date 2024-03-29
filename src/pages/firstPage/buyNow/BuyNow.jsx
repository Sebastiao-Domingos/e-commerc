import {Div} from './style'
import { ColorContext, BoughtContext } from '../../../contexts/export.js'
import {useContext,useState , useEffect  } from 'react'
import {useNavigate } from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa'
import {log } from '../../../images/exportImages.js'
import {BtnNormal } from '../../../components/export.js'
import {Header} from './header/Header'
export const BuyNow = () => {
  document.title = "Confirmar os produtos selecionados"

  const { colors , } = useContext(ColorContext );
  const {productsBought , setProductsBought} = useContext(BoughtContext);

  const [price , setPrice ] = useState(getTotalPrice(productsBought));


  const navigator = useNavigate();

  function handleNextPage(){
    navigator("/address");
  }

  function handlePreviousPage(){
    navigator("/");
  }

  return (
    <Div colors ={colors}>
      <Header title ="Confirma os Produtos Selecionados" />

      <div className="container">
        <table>
          <thead>
            <tr>
              <td>Produtos</td>
              <td>Quantidade</td>
              <td>Valor em Kz</td>
            </tr>
          </thead>
          <tbody>
              { productsBought && productsBought.map((product , index ) => (
                <tr key = {index}>
                  <td>
                    <img src={product.foto} alt="Produtos selecionados" />
                    <div>
                      <p>{product.nome}</p>
                      <p>Melhores Produtos para agricultura só encontras na SOLEVO</p>
                    </div>
                  </td>

                  <td>{product.qnt}</td>

                  <td>{product.preco}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="price">
          <span>Preço Total : {price },00 Kz</span>
        </div>

        <div className="buttons">
            <BtnNormal 
              text ="Voltar"
              width="7rem"
              backColor ={colors.black}
              event ={handlePreviousPage}
            />
            <BtnNormal 
              text ="Próximo"
              width="7rem"
              backColor ={colors.green1}
              event = { handleNextPage }
            />
        </div>
      </div>
    </Div>
  )
}

function getTotalPrice( products  ){
    let price =0;
    products.forEach( (product ) => {
      price += product.preco*product.qnt;
    })

    return price;
}