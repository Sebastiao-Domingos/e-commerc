import { Div} from './style'
import {ColorContext } from "../../../../contexts/export.js"
import { photo1,photo3,photo2 } from "../../../../images/exportImages.js"
import {useContext } from "react"

export const Item = ({ title ,info , change }) => {

    const { colors } = useContext(ColorContext);
    return (
        <Div colors ={colors} photo = {photo1}>
            { !change  ? (
            <>
                <img src={photo3} alt="" />
                <div className="context">
                    <h2>A SOLEVO é uma empresa voltada para a área da agricultura</h2>
                    <h3>Venha participar desta grande família</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam natus fuga unde, distinctio omnis nulla delectus voluptatibus expedita praesentium veritatis dolorem, harum odio impedit, alias sint. Voluptatum, esse illum?</p>
                </div>
            </>
            ) : (
            <>
                <div className="context">
                    <h2>A SOLEVO é uma empresa voltada para a área da agricultura</h2>
                    <h3>Venha participar desta grande família</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam natus fuga unde, distinctio omnis nulla delectus voluptatibus expedita praesentium veritatis dolorem, harum odio impedit, alias sint. Voluptatum, esse illum?</p>
                </div>
                <img src={photo3} alt="" />
            </>
            )}

        </Div>
    )
}
