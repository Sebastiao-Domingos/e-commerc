import {Div} from './style'
import { ColorContext } from '../../../../contexts/export.js'
import {useContext } from 'react'

export const Item = ({ active ,title , image,event }) => {
    const { colors , } = useContext(ColorContext);
  return (
    <Div colors ={ colors} active ={ active } onClick = { event } >
        <label htmlFor=""></label>
        <h4>{ title }</h4>
        <ul>
            <li>Número de Conta : 1243125438</li>
            <li>IBAN : 0060-1243-1254-3867-2345-123</li>
        </ul>
    </Div>
  )
}
