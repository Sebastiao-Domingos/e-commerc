import styled,{css,keyframes} from 'styled-components'


const girar = keyframes`
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
`

export const Div = styled.div`
    width:20rem;
    min-height:13rem;
    margin:auto;
    background: ${ props => props.colors.black};
    border-radius:2px;
    padding:20px;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;
    z-index:1000;

    p{
        color:#fefefe;
        padding-top:1rem;
    }

    >div{
        margin:auto;
        width:60px;
        height:60px;
        border-radius:50%;
        border:8px solid transparent; 
        animation: ${ girar } 2s infinite linear;
        box-shadow:0 0  50px rgba(255,255,255,.8);

        ${ props => {
            return css`
                border-color: ${ props.colors.green1} ${ props.colors.black};
            `}
        }
    }
`;