import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    min-height:40rem;
    padding-top:3rem;
    
    >div{
        padding: 0 4rem;
    }

    .content{
        padding:4rem ;
        .input{
            background:${props => props.colors.blue};
            padding:20px;
            border-radius:5px;
            width:35rem;
            input{
                padding:10px;
                width:25rem;
                border-bottom:2px solid ${props => props.colors.black};
                background:transparent;
                color:#ffffff;
                font-size:1.1rem;
                &::placeholder{
                    color:white;
                }
            }

            button {
                background:transparent;
                svg{
                    font-size:2rem;
                    color:#ffff;
                    margin-left:2rem;
                }
            }
        }
        ul{
            width:100%;
            list-style:none;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

            li{
                position:relative;
                margin:1rem 0;
                background:${ props => props.colors.black };
                padding:20px 20px 20px 9rem;
                border-radius:5px;
                color:#ffffff;
                max-width:35rem;


                span{
                    position:absolute;
                    top:-20px;
                    left:20px;
                    background:${ props => props.colors.green1};
                    padding:15px;
                    border:3px solid #ffffff;
                    border-radius:5px;
                    width:6rem;
                    text-align:center;
                    text-transform:uppercase;
                }
                p{ font-size:1.1rem ;}

            }
            .eu{
                align-items:end;
            }

            .solevo{
                align-items:right;
                margin-left:55%;
            }


        }
    }

`;