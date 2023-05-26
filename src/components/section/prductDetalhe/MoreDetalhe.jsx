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


  useEffect( () => {
    const detaleProduct = products[typeProduct].filter( ( product ) => product.id === id );
    setProduct( () =>  detaleProduct[0] );
  },[]);

  return (
    <Div colors ={ colors }>
      { product ?  (
        <div className="content">
          <img src={product.photo } alt="foto de produto" />

          <div className="content_text">
            <h3>{product.name}</h3> 
            <p className ="price"><span>{product.price}</span>, 00kz</p> 

            <p className ="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis minus qui porro, impedit ab delectus modi consequuntur, sed sapiente ipsum natus rerum, dolore quas nihil quibusdam corporis soluta dolores eum.
            </p>

            <div className="especification">
              <h4>Informações Do Fabrico</h4>
              <ul>
                <li>Fabricado em : 20 de fevereiro de 2020</li>
                <li>Expera em : 20 de fevereiro de 2025</li>
                <li>Código de fabricação : 00123F0A</li>
                <li>Nome da Fábrica : AnfoCalt </li>
              </ul>
            </div>

            <div className="precaussoes">
              <h4>Precaussões</h4>
              <ul>
                <li>Manter fora do alcanse das crianças;</li>
                <li>Durante o trabalho use sempre a mascara;</li>
                <li>Em cause de acidente ligue para um hospital mais próximo;</li>
              </ul>
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
