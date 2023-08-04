import {Div} from './style'
import {BtnNormal } from '../../../export.js'
import { ColorContext, BoughtContext } from '../../../../contexts/export.js'
import {useContext, useCallback,useRef,useState,useEffect } from 'react'
import {Navigate , useNavigate} from 'react-router-dom'
import {FaTrashAlt } from 'react-icons/fa'

export const Card = ({photo }) => {

    const { colors , } = useContext( ColorContext );
    const { productsBought , setProductsBought, setCounter } = useContext(BoughtContext);

    const cardRef = useRef();
    const navigator =useNavigate()
    const [products , setProducts ] = useState(null);
    const [ quantity , setQuantity ] = useState( 0 );

    useEffect( () => {
        setQuantity( () =>  productsBought.length )
        setProducts( productsBought );
    },[productsBought]);

    const handleBuyMore = useCallback(()=>{
        cardRef.current.style.display="none";
    },[]);

    function handleBuyNow (){

        if( productsBought.length > 0 ) {
            navigator("/buy");

            window.scrollTo( {
                top:0,
                left:0,
                behavior:"smooth"
            })
        } else{
            alert("Sem protudos para finalizar a compra")
        }

    }

    let arrayBought= productsBought ;

    function handleDeleteProduct( id ,pos ){

        let bought = arrayBought.filter(  (product, index ) => index !== pos )
        
        setProductsBought( () => bought );

        setCounter( previous => previous - 1 );
    }
  return ( 
  <>
    <Div colors = {colors} ref = {cardRef} quantity = { quantity } >
        <h3>A minha compra</h3>
        <div className = "bying">
            { products ? (
                <table>
                    <thead>
                        <tr>
                        <td>Imagem</td>
                        <td>Nome</td>
                        <td>Quantidade</td>
                        <td>Valor em Kz</td>
                        <td>Eliminar</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map( ( product , index ) => (
                                <tr key = {index }>
                                    <td><img src={ product.foto} alt="produtos" /></td>
                                    <td>{ product.nome }</td>
                                    <td>{product.qnt} </td>
                                    <td>{ product.preco } </td>
                                    <td><span onClick = { () => handleDeleteProduct( product.id , index) } ><FaTrashAlt /></span></td>
                                </tr>
                            ))
                        }
                    
                    </tbody>  
                </table>
            ) : ( <p>Não tem nenhum produto na cestinha!</p> )}
        </div>
        <div className="buttons">
            <BtnNormal 
                text ="Comprar Mais"
                width="7rem"
                backColor ={ colors.green1 }
                event ={handleBuyMore}
            />

            <BtnNormal 
                text ="Finalizar a Compra"
                width="7rem"
                backColor ={ colors.green1 }
                event = { handleBuyNow }
            />
        </div>


    </Div>

  </>
  )
}

