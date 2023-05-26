import {Div} from './style'
import {ColorContext } from '../../../contexts/ColorProvider';
import {useContext } from 'react'

export const Base = ({children}) => {
    
    const {colors , } = useContext(ColorContext);

    return (
        <Div colors = {colors}> {children} </Div>
    )
}
