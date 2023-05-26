import {Div} from './style'
import {useContext,useState ,useReducer} from 'react'
import {useNavigate } from 'react-router-dom'
import { ColorContext,UserContext,BoughtContext } from '../../../contexts/export.js'
import {BtnNormal } from '../../../components/export.js'
import {Header } from '../buyNow/header/Header'
import {Warn } from '../../../components/modals/export.js'
import { Item } from './item/Item'

export const Pagamento = () => {
    const { colors , } = useContext(ColorContext);
    const { productsBought , setProductsBought} = useContext(BoughtContext);
    const navigator = useNavigate();


    
    function reducer( state , action ){
        switch ( action ) {
            case 1:
                return {...state , active1:true , active2:false,active3:false,active4:false}
            case 2:
                return {...state , active1:false , active2:true,active3:false,active4:false}
            case 3:
                return {...state , active1:false , active2:false,active3:true,active4:false}
            case 4:
                return {...state , active1:false , active2:false,active3:false,active4:true}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer( reducer , {active1 : true , active2 : false , active3 : false , active4: false });


    function handleConcludeOperation(){
        alert("ola");
    }
    
  return (
    <Div colors ={colors}>
        <Header 
            title ="Escolhe o metodo de pagamento"
        />

        <div className="container">
            <div className="content">
                <Item 
                    title ="Transferência Bancária"
                    active ={state.active1 }
                    image = ""
                    event = { () => dispatch(1) }
                />
                <Item 
                    title ="Multicaixa Express"
                    active ={state.active2}
                    image = ""
                    event = { () => dispatch(2) }
                />
                <Item 
                    title ="Cartão Visa"
                    active ={state.active3}
                    image = ""
                    event = { () => dispatch(3) }
                />
                <Item 
                    title ="Voucher"
                    active ={state.active4}
                    image = ""
                    event = { () => dispatch(4) }
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

    </Div>
  )
}

