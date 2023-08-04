import { ColorContext } from "../../../../../../contexts/export.js"
import {useContext} from "react"
import styled ,{css} from "styled-components"

export const Li = styled.li`
    display:flex;
    background:transparent;
    border-radius:5rem 0 0 5rem;
    a{
        padding:9px 1rem;
        text-decoration:none;
        color:black;
        width:100%;
    }



    ${ props => props.actived && css`
        a{
            color:${ props => props.colors.white };
            font-weight:700;
            
        }
        background:${ props => props.colors.blue };
    `}
    &:hover{
        background:${ props => props.colors.blue };
    }
`;


export function Option( { children , actived , event  }) {

    const {colors} = useContext(ColorContext);

    return (
        <Li colors = { colors } actived = { actived} onClick = {event}>{children}</Li>
    )
}
