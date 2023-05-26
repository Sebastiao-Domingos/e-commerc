import styled from 'styled-components'

export const Div = styled.footer`
    width:100%;
    background:${props => props.colors.black};
    min-height:20rem;
  
    p,li,a{
        color:#fefefe;
    }
    .seguir{
        background:${props => props.colors.black};
        padding:4% 6% 2rem 6%;

        p{
            color:#fefefe;


            a{
                text-decoration:none;
                padding-bottom:2px;
                border-bottom:2px dotted;
                color:${ props => props.colors.green1};
                font-style:italic;
                margin-left:15px;

                &:hover{
                    color:${ props => props.colors.blue};
                }
            }
        }
    }

    .contentFooter{
        padding:1rem 6% 4% 6%;
        display:flex;

        .logo{
            width:40%;
            padding-right:20px;

            img{
                width:60%;
                height:8rem;
                margin-bottom:1rem;
            }

            p{
                font-size:.7rem;
                border-top:1px dotted ${ props => props.colors.green1};
                padding-top:1rem;
            }
        }

        .text{
            width:60%;
            display:flex;
            justify-content:space-between;

            >div{
                width:45%;
                h3{
                    color:${ props => props.colors.green1};
                    margin-bottom:1rem;
                    padding-bottom:10px;
                    border-bottom:2px dotted ${ props => props.colors.green1};
                }
                ul{
                    list-style:none;
                    li{
                        margin:10px 0;
                        font-size:.8rem;
                        padding-bottom:5px;

                        a{
                            text-decoration:none;
                        }

                        &:not(:last-child){
                            border-bottom:1px dotted rgba(254, 254, 254, 0.4)};
                        }
                    }
                }
            }
        }
    }

    .last{
        background:#100f0f;
        padding:10px;
        display:flex;

        p{
            margin:auto;
            font-size:.8rem;
            font-style:italic;
        }

    }
`;