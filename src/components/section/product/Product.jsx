import {Div } from './style'
import {FaStar } from 'react-icons/fa'
import { ColorContext} from '../../../contexts/ColorProvider'
import {useContext } from 'react';
import { BtnNormal} from '../../export.js'

export const Product = ( {eventDetale,event ,name , price ,info , id ,photo,star }) => {

    const { colors, } = useContext(ColorContext);
    

    let stars = new Array();
    for( let i = 0 ; i< star ; i++){
        stars.push(star);
    }
  return (
    <Div colors ={colors }>
        <img src={ photo } alt="product" />

        <div className="catalogo">
            <h3>{name}</h3>
            <p className ="price"><span>{price}</span> ,00kz</p>
            <p className ="description">{info} <button onClick = { eventDetale } >Mais Detalhes</button> </p>
            <div className="stars">
                <p>{ stars ? stars.map( (el , ind)=> (
                    <FaStar key ={ind}/>
                )) : "ola"}
                </p>

                <p>ID : {id}</p>
            </div>

            <BtnNormal 
                text ="Adicionar"
                backColor ={colors.blue}
                width ='6rem'
                event ={event}
            />

        </div>
    </Div>
  )
}
