import styled ,{ keyframes } from 'styled-components'


const come = keyframes`
  0%{transform: scale(.9);}
  35%{ transform: scale(1.05)}
  70%{ transform: scale(.99)}
  100%{ transform: scale(1)}
`

export const Div = styled.div`
    >div{
        position:relative;
        margin:1rem auto;
        width:23rem;
        height:28em;
        border-radius:5px;
        background:${ props => props.colors.black};
        border: 1px dotted ${ props => props.colors.green1 };
        padding:6rem 1rem 2rem 1rem;
        color:#FFF;
        animation:${ come } .6s forwards;

        &::before{
        position:absolute;
        top:0;
        left:0;
        height:6rem;
        width:100%;
        content:"Sign In";
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:2rem;
        }



        form{
            width:100%;
            border-top:1px dotted ${ props => props.colors.green1};
            padding-top:1rem;

            div{
                width:100%;
                display:flex;
                flex-direction:column;
                
                &:not(:last-child){
                margin-bottom:2rem;
                }

                label, input{ font-size:1rem; }

                label{
                color:#FFF;
                margin-bottom: 1rem;
                }

                input{
                padding:10px;
                border-radius:3px;
                }

                p{
                color:#FFF;
                margin-top:1.5rem;

                a{
                    color: ${ props => props.colors.green1};
                }
                }
            }
        }
    }

`;

