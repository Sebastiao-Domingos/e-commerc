import {Div} from './style'
import { Item } from './item/Item'
import { useCallback,useEffect, useRef,useState,useContext  } from 'react';
import { BoughtContext ,ProductsContext } from '../../../contexts/export.js'


export const Destac = () => {
    const { productsBought , setProductsBought,counter , setCounter } = useContext( BoughtContext );
    const { products , typeProduct  } =useContext(ProductsContext);
    const [destacProducts ,setDestacProducts] = useState([]);

    useEffect( () => {
        if(products ){
            setDestacProducts( ()  =>   products.slice( 2 , 6 ) );
        }
    } ,[products])

    const contentWrapper = useRef();

    let bought = productsBought || [];

    function handleAddCard( prod ){
        if( products ) {
            const newProduct = products.filter( (product )=> {
                if(product.id === prod ) return product;
            })
            newProduct[0].qnt = 1;
            bought.push(newProduct[0]);

            setProductsBought( () => bought );

            setCounter( previous => previous + 1 ) ;
        } 
    }

    function handleSlide(){
        let currentPosition = 0 , final = false;

        setInterval(() => {   
            if(  contentWrapper.current !== null ){

                if( !final ){
                    if( currentPosition===3600 ) final = true
                    else{
                        currentPosition += 1200
                        contentWrapper.current.scrollTo({
                            left:`${currentPosition}` ,
                            top:0,
                            behavior:"smooth",
                        });
                    }  ;
                }else {
                    if( currentPosition === 0 ) final =false;
                    else {
                        currentPosition -= 1200;
                        contentWrapper.current.scrollTo({
                            left:`${currentPosition}` ,
                            top:0,
                            behavior:"smooth",
                        });
                    }   
                }
            }

        }, 5000);
    }

    useEffect(()=>{
        handleSlide();
    },[])

  return (
    <Div>
        <div className="container" >
            <div className="contentWrapper" ref = { contentWrapper} >
                <div className="wrapper" >
                    { destacProducts ? (
                        destacProducts.map( (product , index ) => (
                            <Item 
                                name ={ product.nome }
                                price ={ product.preco}
                                photo ={ product.foto }
                                key = {index}
                                changePosition = { index%2===0 }
                                event = { () => handleAddCard( product.id ) }
                            />
                        ))
                    ):(
                        <h2>Procesando</h2>
                    )}
                </div>
            </div>
        </div>
    </Div>
  )
}
