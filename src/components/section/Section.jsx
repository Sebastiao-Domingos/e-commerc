import {Div} from './style'
import {FaChevronUp} from "react-icons/fa" 
import { ColorContext,BoughtContext ,ProductsContext } from '../../contexts/export.js'
import { useContext,useCallback,useState,useEffect,useReducer } from 'react'
import axios from 'axios'
import {Loading } from '../modals/export.js'
import { Product } from './product/Product'
import {MoreDetalhe } from './prductDetalhe/MoreDetalhe'
var url  = "http://localhost/trabalhoPB/api";


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
                    if( n.id > m.id ) return 1;
                    if( n.id < m.id ) return -1;
                    return 0;
                }); 
                return {...state , first:true, second:false,third:false } ;
            }
            case 2:
                showProducts.all.sort( ( a, b ) => {
                    if( a.nome.toLowerCase() > b.nome.toLowerCase() ) return 1;
                    if( a.nome.toLowerCase() < b.nome.toLowerCase() ) return -1;
                    return 0;
                })
                return {...state , first:false, second:true,third:false };
            case 3:
                showProducts.all.sort( ( a , b ) => {
                    if( a.preco > b.preco ) return 1;
                    if( a.preco < b.preco ) return -1;
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

        getProducts( typeProduct ).then( res => {
            setShowProducts({...showProducts , all:res['dados'] });
            setProducts( res['dados'] );
        })

    },[])

    useEffect( () => {
        if( keySearch !== ""){
            const filterProducts =showProducts.all.filter( ( product ) => {
                return product.nome.toLowerCase().includes(keySearch.toLowerCase());
            }) 
            setShowProducts({...showProducts , searched :filterProducts,searching : true } );
        }else {
            setShowProducts({...showProducts , searched :[] ,searching :false} );
        }
    },[keySearch])


    useEffect( () => { 
        getProducts( typeProduct ).then( res => {
            setShowProducts({...showProducts , all:res['dados'] });
        })
    } ,[typeProduct])


    function handleMoreDetale(id_product ){
        dispatch("detale")

        setProductId( id_product );
        scrollWindow( 700 );
    }

    let bought = productsBought || [];

    function handleAddCard( prod ){
        
        if( products ) {

            const verify = verifyExistThisProduct( productsBought  , prod );
            
            if( !verify.has ) {

                const newProduct = showProducts.all.filter( (product )=> {
                    if(product.id === prod ) return product;
                })
                let newProductBought =newProduct[0];

                newProductBought.qnt = 1;
                bought.push( newProductBought );
                
                setProductsBought( () => bought );
                
                setCounter( previous => previous + 1 ) ;

            } else {
                bought[ verify.index ].qnt++;
                setProductsBought( () => bought );
            }
        } 
        
    }

  return (
    <Div colors ={ colors } moreDetale = { state.detale }>
        <div className="contentText" >
            <h2>{typeProduct.toUpperCase()}S</h2>

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
                        if( product.ativado )
                            return <Product  key ={index} event = { () => handleAddCard( product.id, index )} eventDetale = { () => handleMoreDetale( product.id )  }
                                name ={ product.nome }
                                price ={product.preco}
                                info ={product.info}
                                photo ={product.foto}
                                id ={product.codigo}
                                star={product.stars}
                            
                            />
                    }) ) : ( <Loading />)
                ):(  showProducts.searched.map( ( product , index )=>{
                        return <Product  key ={index} event = { () => handleAddCard( product.id ) }
                            name ={ product.nome }
                            price ={product.preco}
                            info ={product.info}
                            photo ={product.foto}
                            id ={product.codigo}
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


function verifyExistThisProduct(products , product ){
    let has , index = -1;
    
    products.filter( ( prod , pos  ) => {
        if( prod.id === product ) {
            index = pos;
            has = true;
        }
    });

    return { has : has , index : index };
}

async function getProducts(type){

    try {
        const res = await fetch(`${url}/produtos/lista/${type}`);
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error);
        return "No";
    }

}