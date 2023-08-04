import styled , { css , keyframes} from "styled-components"


const comeMenu = keyframes`
    0%{
        left:-15rem;
    }
    100%{
        left:0;
    }

`
const goMenu = keyframes`
    0%{
        left:0rem;
    }
    100%{
        left:-15rem;
    }

`
 export const Div = styled.div`
    position:fixed;
    top:6.5rem;
    left:0;
    width:15rem;
    height:89vh;
    background:${ props => props.colors.white};
    border-radius:4px;
    padding:1rem 0 1rem 1.5rem;
    box-shadow: 0 0 10px #ccc;

    ${ props => props.showed ? css`
        animation: ${ comeMenu } .6s forwards;
    ` : css`
        animation: ${ goMenu } .6s forwards;
    `}

    

    >div{
        h3{
            color:${ props => props.colors.green1};            
            span svg{
                margin-left:10px;
                color:${ props => props.colors.green1};
            }
        }

        ul{
            list-style:none;
            margin-top:17px;
        }
    }

`;