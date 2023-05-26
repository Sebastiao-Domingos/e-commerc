import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    min-height:50rem; 
    padding:5rem 4rem;

    .price {
        background:${props => props.colors.black};
        padding:20px;
        margin-top:1rem;
        text-align:center;
        color:#fff;
        span{
            font-size:2.4rem;
        }
    }
    .buttons{
        margin-top:2rem;

        >button{
            margin-right:2rem;
        }
    }
    .container{
        margin-top:2rem;

        table{
            border-spacing:0px;
            width:100%;

            thead{
                background: ${ props => props.colors.black};
                height:4rem;

                tr{
                    td{
                        color:#ffff;
                        &:first-child{
                            padding-left:1rem;
                        }
                    }
                }
            }

            tbody{
                tr{
                    &:not(:last-child){
                        td{
                            border-bottom:1px dotted ${ props => props.colors.blue};
                        }
                    }
                    td{
                        padding:.5rem 0;
                        &:first-child{
                            display:flex;
                            >img{
                                width:60px;
                                height:60px;

                                &:hover{
                                    transform:scale(1.3);
                                }
                            }
                            >div{
                                margin-left:1rem;

                                p{
                                    &:first-child{
                                        color:${ props => props.colors.green1};
                                        padding-bottom:5px;
                                    }
                                    &:last-child{
                                        font-size:.8rem;
                                    }
                                }
                            }
                        }

                        >svg{
                            cursor:pointer;
                        }
                    }
                }
            }
        }
    }
    
`;