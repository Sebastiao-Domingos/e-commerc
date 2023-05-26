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

    useEffect( () => {
        setProducts( productsBought );
    },[productsBought])

    const handleBuyMore = useCallback(()=>{
        cardRef.current.style.display="none";
    },[])

    function handleBuyNow (){
        navigator("/buy");

        window.scrollTo( {
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    let arrayBought= productsBought ;

    function handleDeleteProduct( id ,pos ){

        let bought = arrayBought.filter(  (product, index ) => index !== pos )
        
        setProductsBought( () => bought );

        setCounter( previous => previous - 1 );
    }
  return (
    <Div colors = {colors} ref = {cardRef}>
        <h3>A minha compra</h3>

        <table>
            <thead>
                <tr>
                <td>Imagem</td>
                <td>Nome</td>
                <td>Quantidade</td>
                <td>Valor em Kz</td>
                </tr>
            </thead>
            <tbody>
                { products ? (
                    products.map( ( product , index ) => (
                        <tr key = {index }>
                            <td><img src={ product.photo} alt="produtos" /></td>
                            <td>{ product.name }</td>
                            <td><button> -</button><span>1</span><button>+</button> </td>
                            <td>{ product.price } <span onClick = { () => handleDeleteProduct( product.id , index) } ><FaTrashAlt /></span></td>
                        </tr>
                    ))
                ) : (
                    <tr><td>Sem produtos clica no comprar para adicionar</td></tr>
                )}
            </tbody>
        </table>

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
  )
}

