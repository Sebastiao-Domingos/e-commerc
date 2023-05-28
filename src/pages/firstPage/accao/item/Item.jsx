import { Div } from "./style"
import { ColorContext } from "../../../../contexts/export.js"
import {useContext } from "react"

export const Item = ({photo}) => {

    const { colors ,} = useContext(ColorContext);

    return (
        <Div colors ={colors}>
            <img src={photo} alt="foto" />

            <div className="contentItem">
                <h3>Preveir o meio ambiente</h3>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae expedita quam, ullam vero fuga laboriosam, repellendus, sed quisquam consequuntur voluptatibus blanditiis beatae! Asperiores voluptate culpa consequuntur consequatur adipisci praesentium libero.</p>
            </div>
        </Div>
    )
}
