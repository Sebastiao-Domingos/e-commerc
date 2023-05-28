import {Div} from "./style"
import {ColorContext } from "../../../../contexts/export.js"
import {useContext} from "react"

export const ItemQuestion = ({photo ,active }) => {
    const { colors } = useContext(ColorContext);
    return (
        <Div colors ={ colors } active = {active }>
            { active ? (
                <>
                    <img src={photo} alt="empresa da solevo" />

                    <div className="text">
                        <h3>Somos uma empresa volta na venda dos produtos agricolas.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatum pariatur non magni modi eos qui natus quis quae saepe at vel ipsa nobis neque, minus excepturi facilis? Iure, quas.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatum pariatur non magni modi eos qui natus quis quae saepe at vel ipsa nobis neque, minus excepturi facilis? Iure, quas.</p>
                    </div>
                </>
            ) : (
                <>

                    <div className="text">
                        <h3>Somos uma empresa volta na venda dos produtos agricolas.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatum pariatur non magni modi eos qui natus quis quae saepe at vel ipsa nobis neque, minus excepturi facilis? Iure, quas.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatum pariatur non magni modi eos qui natus quis quae saepe at vel ipsa nobis neque, minus excepturi facilis? Iure, quas.</p>
                    </div>
                    <img src={photo} alt="empresa da solevo" />
                </>
            )}
        </Div>
    )
}
