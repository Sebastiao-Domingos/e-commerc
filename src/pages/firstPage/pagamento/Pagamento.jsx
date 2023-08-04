import {Div} from './style'
import {useContext,useState ,useReducer , useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { ColorContext,UserContext,BoughtContext } from '../../../contexts/export.js'
import {BtnNormal } from '../../../components/export.js'
import {Header } from '../buyNow/header/Header'
import {Warn } from '../../../components/modals/export.js'
import { Item } from './item/Item'
import { Fatura } from "./fatura/fatura";
import { express , mult } from "../../../images/exportImages.js"


export const Pagamento = () => {
    document.title  = "Modo de pagamento";

    const { colors , } = useContext(ColorContext);
    const { productsBought , setProductsBought} = useContext(BoughtContext);
    const navigator = useNavigate();
    const [ quantidade , setQuantidade ] = useState(0);
    const [ show , setShow ] = useState(false);
    const [ tipoPagamento , setTipoPagamento ] = useState("Transferência Bancária");
    const [ factCodigo  ,setFactCodigo ] = useState("");
    
    function reducer( state , action ){
        switch ( action ) {
            case 1:
                setTipoPagamento( () =>  "Transferência Bancária");
                return {...state , active1:true , active2:false,active3:false}
            case 2:
                setTipoPagamento( () =>  "Multicaixa Express");
                return {...state , active1:false , active2:true,active3:false}
            case 3:
                setTipoPagamento( () =>  "Pagamento á Mão");
                return {...state , active1:false , active2:false,active3:true}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer( reducer , {active1 : true , active2 : false , active3 : false});

    function handleConcludeOperation(){
        setShow( true);
        var dados = productsBought ;

        dados[ dados.length - 1  ].tipo_pagamento = tipoPagamento;
        setProductsBought( dados );
    }
    
  return (<>
    <Div colors ={colors}>
        { !show ? (<>
                <Header title ="Escolhe o método de pagamento" />
                <div className="container">
                    <div className="content">
                        <Item 
                            title ="Transferência Bancária"
                            active ={state.active1 }
                            image = {express}
                            event = { () => dispatch(1) }
                        />
                        <Item 
                            title ="Multicaixa Express"
                            active ={state.active2}
                            image = {mult}
                            event = { () => dispatch(2) }
                        />
        
                        <Item 
                            title ="Pagamento à Mão"
                            active ={state.active3}
                            image = {express}
                            event = { () => dispatch(3) }
                        />
        
                    </div>
        
                    <div className="buttons">
                        <BtnNormal 
                            text ="Voltar"
                            backColor ={colors.black}
                            width ="7rem"
                            event={ () => navigator("/address") }
                        />
                        <BtnNormal 
                            text ="Concluir a Compra"
                            backColor ={colors.green1}
                            width ="10rem"
                            event={handleConcludeOperation}
                        />
                    </div>
                </div>
            </>
        ) :(<>
                <Header  title ={ quantidade &&  `Número da Factura ${quantidade}`}/>
                <Fatura colors = {colors}  setShow ={ setShow } setFactCodigo = {setFactCodigo } setQuantidade = {setQuantidade}  />
            </>
        ) }
    </Div>
  </>
  )
}

