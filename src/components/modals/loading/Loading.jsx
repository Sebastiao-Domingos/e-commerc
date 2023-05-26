import {Div} from './style'
import { Content } from '../contentModa/Content'
import { MotherModal } from '../export.js'
import { ColorContext } from '../../../contexts/export.js'
import { useContext } from 'react'
export const Loading = () => {

    const {colors ,} =useContext(ColorContext);
  return (
    <MotherModal>
        <Div colors = {colors }>
            <p>Aguarde por um instante...</p>
            <div> </div>
        </Div>
    </MotherModal>
  )
}
