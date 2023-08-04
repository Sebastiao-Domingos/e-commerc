import styled from "styled-components"

export const Div = styled.div`
    position:relative;
    width:100%;
    min-height:35rem;
    padding: 4rem;

    .fundo{
        position:absolute;
        z-index:0;
        left:50%;
        top:62%;
        transform:translate(-50%,-50%);
        >svg{
            font-size:21rem;
            color:rgba(235, 238, 235, 0.2);
        }
    }

    .button{
        position:relative;
        width:100%;
        display:flex;
        justify-content:right;
        padding:20px 0;

    }
    
    .btnVoltar{
        position:absolute;
        top:-50px;
        font-size:2rem;
        background:transparent;
        color:#9c0303;
    }
    .perfil ul{
        margin-top:-70px;
        li{
            list-style:none;
            padding:15px 0;
            font-size:1.2rem;
        }
    }

    .atualizar{
        position:relative;
        .btnVoltar{
            top:47px;
            right:0;
        }
        .form{
            width:25rem;
            padding:1.5rem 10px;
            border-radius:4px;
            div{
                display:flex;
                flex-direction:column;
                label , input{ font-size:1.1rem;}
                label{
                    margin:1rem 0 10px 0 ;
                }
                input{
                    padding:10px;
                    border-radius:4px;
                    box-shadow:0 0 4px #747171;
                }
            }

            button{
               position:absolute;
               top:117px;
               right:0; 
            }
        }
    }
`;