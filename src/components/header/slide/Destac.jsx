import {Div} from './style'
import { Item } from './item/Item'
import { useCallback,useEffect, useRef,useState,useContext  } from 'react';
import { BoughtContext ,ProductsContext } from '../../../contexts/export.js'


export const Destac = () => {
    const { productsBought , setProductsBought,counter , setCounter } = useContext( BoughtContext );
    const { products , } =useContext(ProductsContext);
    const [destacProducts ,setDestacProducts] = useState([]);

    useEffect( () => {
        if(products[ "fertilizantes" ]){
            setDestacProducts( ()  =>   products[ "fertilizantes" ].slice( 2 , 6 ) );
        }
    } ,[products[ "fertilizantes" ]])

    const contentWrapper = useRef();


    let bought = productsBought || [];

    function handleAddCard( prod ){
        if( products["fertilizantes"] ) {
            const newProduct = products["fertilizantes"].filter( (product )=> {
                if(product.id === prod ) return product;
            })
            bought.push(newProduct[0]);
            setProductsBought( () => bought );

            setCounter( previous => previous + 1 ) ;
        } 
    }

    function handleSlide(){
        let currentPosition = 0 , final = false;

        setInterval(() => {    

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
                                name ={ product.name }
                                price ={ product.price}
                                photo ={ product.photo }
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
