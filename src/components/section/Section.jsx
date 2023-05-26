import {Div} from './style'
import {FaChevronUp} from "react-icons/fa" 
import { ColorContext,BoughtContext ,ProductsContext } from '../../contexts/export.js'
import { useContext,useCallback,useState,useEffect,useReducer } from 'react'
import axios from 'axios'
import {Loading } from '../modals/export.js'
import { Product } from './product/Product'
import {MoreDetalhe } from './prductDetalhe/MoreDetalhe'



export const Section = () => {

    const { colors , } = useContext(ColorContext);
    const { productsBought , setProductsBought,counter , setCounter } = useContext( BoughtContext );
    const { products , setProducts,keySearch,typeProduct } = useContext(ProductsContext);
    const [showProducts ,setShowProducts ] = useState({all : "",searched : "",searching :false });
    const [productId , setProductId ] = useState(null);

    function reducer(state , action ){
        switch (action) {
            case 1:{
                showProducts.all.sort( (n , m) => {
                    if( n.id.toLowerCase() > m.id.toLowerCase() ) return 1;
                    if( n.id.toLowerCase() < m.id.toLowerCase() ) return -1;
                    return 0;
                }); 
                return {...state , first:true, second:false,third:false } ;
            }
            case 2:
                showProducts.all.sort( ( a, b ) => {
                    if( a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
                    if( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
                    return 0;
                })
                return {...state , first:false, second:true,third:false };
            case 3:
                showProducts.all.sort( ( a , b ) => {
                    if( a.price > b.price ) return 1;
                    if( a.price < b.price ) return -1;
                    return 0;
                } )
                return {...state , first:false, second:false,third:true};
            case "detale":{
                return {...state , detale : true};
            }
            case "detaleBack":
                return {...state , detale : false};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer( reducer , {first:true , second:false, third:false ,detale:false } )


    useEffect( () => {
        axios.get("http://localhost:3030/products")
        .then( res =>{
            setProducts( res.data );
            setShowProducts( {...showProducts, all:res.data[typeProduct] });
        })
        .catch( err => console.log(err) );

    },[])


    useEffect( () => {
        if( keySearch !== ""){
            const filterProducts =showProducts.all.filter( ( product ) => {
                return product.name.toLowerCase().includes(keySearch.toLowerCase());
            }) 
            setShowProducts({...showProducts , searched :filterProducts,searching : true } );
        }else {
            setShowProducts({...showProducts , searched :[] ,searching :false} );
        }
    },[keySearch])

    useEffect( () => { setShowProducts({...showProducts , all:products[typeProduct]})} ,[typeProduct])


    function handleMoreDetale(id_product ){
        dispatch("detale")

        setProductId( id_product );
        scrollWindow( 700 );
    }

    let bought = productsBought || [];

    function handleAddCard( prod ){
        if( products[typeProduct] ) {
            const newProduct = products[typeProduct].filter( (product )=> {
                if(product.id === prod ) return product;
            })
            bought.push(newProduct[0]);
            setProductsBought( () => bought );

            setCounter( previous => previous + 1 ) ;
        } 
    }

  return (
    <Div colors ={ colors } moreDetale = { state.detale }>
        <div className="contentText" >
            <h2>{typeProduct.toUpperCase() }</h2>

            <ul>
                <li>Ordenar Por <FaChevronUp />
                    <ul>
                        <li onClick = { () => dispatch(1)}>Código</li>
                        <li  onClick = { () => dispatch(2)}>Nome</li>
                        <li onClick = { () => dispatch(3)}>Preço</li>
                    </ul>
                </li>
            </ul>
        </div>


        <div className="containerProducts">
            <section>
                { !showProducts.searching ? ( showProducts.all ? ( showProducts.all.map( ( product , index )=>{
                        return <Product  key ={index} event = { () => handleAddCard( product.id, index )} eventDetale = { () => handleMoreDetale( product.id )  }
                            name ={ product.name }
                            price ={product.price}
                            info ={product.info}
                            photo ={product.photo}
                            id ={product.id}
                            star={product.stars}
                        
                        />
                    }) ) : ( <Loading />)
                ):(  showProducts.searched.map( ( product , index )=>{
                        return <Product  key ={index} event = { () => handleAddCard( product.id ) }
                            name ={ product.name }
                            price ={product.price}
                            info ={product.info}
                            photo ={product.photo}
                            id ={product.id}
                            star={product.stars}    
                        />
                    })
                )}
            </section>
            <aside>
            { state.detale && (<MoreDetalhe  
                    id ={ productId } 
                    eventBack = { () =>  dispatch("detaleBack") }  
                    event = { handleAddCard }
                />)  }
            </aside>
        </div>
    </Div>
  )
}


function scrollWindow( positionY ){
    window.scrollTo( {
        top:positionY,
        left:0,
        behavior:"smooth"
    })
}