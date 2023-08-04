import {Div} from './style'
import { ColorContext } from '../../../../contexts/export.js'
import {useContext } from 'react'


export const Item = ({ active ,title , image,event }) => {
    const { colors , } = useContext(ColorContext);

  return (
    <Div colors ={colors} active ={ active } onClick = { event } >
        <label htmlFor=""></label>
        <h4>{ title }</h4>

        <img src={image} alt="cartao multicaixa" />
    </Div>
  )
}
