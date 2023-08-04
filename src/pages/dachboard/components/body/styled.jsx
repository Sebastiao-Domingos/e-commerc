import styled,{css , keyframes} from "styled-components"


const goBody = keyframes`
    0%{
        margin-left:.5rem;
        width:98.2vw;
    }
    100%{
        margin-left:16.5rem;
        width:67rem;
    }
`
const comeBody = keyframes`
    0%{
        margin-left:16.5rem;
        width:67rem;
    }
    100%{
        margin-left:.5rem;
        width:98.2vw;
    }
`
export const Div = styled.div`
    min-height:36.9rem;
    background:${ props=> props.colors.white};
    border-radius:5px;
    box-shadow: 0 0 10px #ccc;

    ${ props => props.showed ? css`
        animation: ${ goBody } .6s forwards;
    ` : css`
        animation: ${ comeBody } .6s forwards;
    `} 
`;