import {Div} from './style'
import { BtnNormal } from '../../../export.js'
import {ColorContext } from "../../../../contexts/ColorProvider"
import { useContext } from 'react';
export const Item = ({ changePosition,name , price , description , photo , event  }) => {

    const { colors , } = useContext(ColorContext);
  return (
    <Div colors ={colors}>
        { changePosition ? (
        <>
            <div className="contentText">
                <div className="price">
                    <p><span>{price}</span>,00 Kz</p>
                </div>
                <div className="text">
                    <h2>{ name }</h2>
                    <p>{description ? description  : ("Lorem ipsum dolor sit amet consectetur eius voluptatum ducimus earum doloremque voluptatem, totam, ad necessitatibus eveniet similique incidunt in quibusdam.")}</p>
                    <BtnNormal 
                        text ="Comprar Agora"
                        width="10rem"
                        backColor ={colors.blue}
                        event = { event }
                    />
                </div>
            </div>
            <div className="image">
                <img src={ photo } alt="fertilizante" />
            </div>
        </>
        ):(
        <>
            <div className="image">
                <img src={ photo } alt="fertilizante" />
            </div>
            <div className="contentText">
                <div className="price">
                    <p><span>{price}</span>,00 Kz</p>
                </div>
                <div className="text">
                    <h2>{name}</h2>
                    
                    <p>{description ? description  : ("Lorem ipsum dolor sit amet consectetur eius voluptatum ducimus earum doloremque voluptatem, totam, ad necessitatibus eveniet similique incidunt in quibusdam.")}</p>
                    <BtnNormal 
                        text ="Comprar Agora"
                        width="10rem"
                        backColor ={colors.blue}
                        event = { event }
                    />
                </div>
            </div>
        </>
        )}
    </Div>
  )
}
