import { Div} from './style'
import {ColorContext } from "../../../../contexts/export.js"
import { photo1 } from "../../../../images/exportImages.js"
import {useContext } from "react"

export const Item = ({ title ,info}) => {

    const { colors } = useContext(ColorContext);
    return (
        <Div colors ={colors} photo = {photo1}>Item
        
            {/* <img src={photo1} alt="" /> */}
        </Div>
    )
}
