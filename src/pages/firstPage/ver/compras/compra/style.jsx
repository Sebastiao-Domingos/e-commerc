import styled from "styled-components";

export const Div = styled.div`
    width:100%;
    min-height:40rem;
    padding:6rem 4rem;

    >div{
        width:100%;
    }
    .header{
        margin-bottom:2rem;
        position:relative;

        button{
            position:absolute;
            right:0;
            top:0;
            background:transparent;

            >svg{
                font-size:1.6rem;
                color:#af2c2c;
            }
        }
        h2{
            margin-bottom:2rem;
            color:${ props => props.colors.green1};
            font-size:2rem;
            padding:10px ;
            border-left:2px solid ${ props => props.colors.blue};
        }

        >div{
            p{
                padding:10px 0;
                margin:7px 0 ;
                font-size:1.2rem;
            }
        }
    }

    .body{
        h3{
            background:${props => props.colors.black};
            padding:20px;
            color:${props => props.colors.green1};
            font-size:1.8rem;
            margin-bottom:1rem;
        }

        table{
            border-spacing:0;
            width:100%;
            td{ text-align:center;}
            thead{
                tr{
                    td{
                        font-weight:600;
                        border-bottom:1px solid ${props => props.colors.green1 };
                        padding:10px 0;
                    }
                }
            }

            tbody{
                width:100%;
                tr{
                    &:hover{
                        background:rgba(58, 73, 100, 0.1);
                    }
                    td{
                        padding:10px 0 ;
                        font-weight:500;
                        font-size:1.1rem;
                        img{
                            width:50px;
                            height:50px;
                        }
                    }

                    &:not(:last-child){
                        td{
                            border-bottom:1px dotted ${props => props.colors.blue};
                        }
                    }
                }
            }
        }
    }


`;