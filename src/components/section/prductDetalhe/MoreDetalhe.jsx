import {Div} from './style'
import {ColorContext ,BoughtContext,ProductsContext} from '../../../contexts/export.js'
import {useContext, useEffect,useState } from 'react'
import  BtnNormal  from '../../buttons/BtnNormal'
import { Loading } from '../../modals/export.js'


export const MoreDetalhe = ( { id ,eventBack,event  } ) => {

  const {colors , } = useContext(ColorContext);
  const {productsBought, } = useContext(BoughtContext);
  const { products , typeProduct } = useContext(ProductsContext)
  const [product , setProduct ] = useState();
  const [ precaussoes , setPrecaussoes  ] = useState([]);


  useEffect( () => {

    const detaleProduct = products.filter( ( product ) => product.id === id );
    setProduct( () =>  detaleProduct[0] );

    if( detaleProduct[0] ) {
      const array = detaleProduct[0].precaussoes.split("|");

      setPrecaussoes( array );
    }

  },[]);

  return (
    <Div colors = { colors }>
      { product ?  (
        <div className="content">
          <img src={ product.foto } alt = "foto de produto" />

          <div className="content_text">
            <h3>{product.nome}</h3> 
            <p className ="price"><span>{product.preco}</span>, 00kz</p> 

            <p className ="info">{ product.info } </p>

            <div className="especification">
              <h4>Informações Do Fabrico</h4>
              <ul>
                <li>ID do Prutudo : { product.id } </li>
                <li>Fabricado em : { product.data_fabrico }</li>
                <li>Expera em : { product.data_validade }</li>
                <li>Código de fabricação : {product.codigo }</li>
                <li>Nome da Fábrica : { product.fabricante} </li>
              </ul>
            </div>

            <div className="precaussoes">
              <h4>Precaussões</h4>
              <ol>
                <li>{ precaussoes && precaussoes[0] }</li>
                <li>{ precaussoes && precaussoes[1] }</li>
                <li>{ precaussoes && precaussoes[2] }</li>
              </ol>
            </div>
          </div>

          <div className="buttons">
              <BtnNormal 
                text ="Voltar"
                width="7rem" 
                backColor={colors.black}
                event = { eventBack }
              />
              <BtnNormal 
                text ="Adicionar"
                width=" 8rem"
                backColor={ colors.green1}
                event = { () => event( product.id ) }
              />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Div>
  )
}
