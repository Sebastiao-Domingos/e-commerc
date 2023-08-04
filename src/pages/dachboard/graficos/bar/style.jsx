import styled ,{css} from "styled-components"

export const Div = styled.div`
    padding:3rem;
    margin:auto;
    width:100%;
    ${ props => {
        if( props.type === "Circulo" )
            return css`
                    width:70%;
                `
        else return ""
    }}
  
`;