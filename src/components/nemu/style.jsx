import styled,{css} from 'styled-components'

export const Nav = styled.nav`
    width:100%;
    height:12rem;
    color:white;
    display: flex;
    flex-direction:column;
    padding:0 ;

    >div{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width:100%;
    }

    ul li{ list-style:none;}
    ul li a{ text-decoration:none; color:#f1f2f3; cursor:pointer;}

    .firstMenu{
        background:${ props => props.colors.green1};
        width:100%;
        height:3rem;
        padding:0 4rem;

        >ul{
            display:flex;
            height:100%;
            >li{
                position:relative;
                height:100%;
                display:flex;
                >a{
                    height:100%;
                    padding:0 .7rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                &:last-child{
                    justify-content:center;
                    align-items:center;
                    color:#f1f2f4;
                    text-transform:uppercase;
                    padding: 0 10px;

                    >svg{
                        margin-left:10px;
                    }

                    &:hover >ul{
                        display:block;
                    }


                    >ul{
                        display:none;
                        width:15rem;
                        position:absolute;
                        top:2.7rem;
                        left:0%;
                        background:${ props => props.colors.green1};
                        z-index:1000;
                        >li{
                            margin:15px 0;
                            display:flex;
                            border-top:2px dotted transparent;

                            &:hover{
                                border-color:${ props => props.colors.black};
                            }
                            a{
                                font-size:.8rem;
                                padding:10px;
                            }
                        }
                    }
                }
            }

            &:first-child{
                >li{
                    &:first-child{
                        background:${ props => props.colors.black };
                    }

                    &::before{
                        position:absolute;
                        content:'';
                        width:100%;
                        height:100%;
                        background:transparent;
                        transition:all .4s;
                        z-index:0;
                    }

                    &:hover{
                        &::before{
                            background:rgba(59, 59, 62, 0.4);
                        }

                        >svg{
                            transform:rotateX(160deg);
                        }
                    }
                    a{
                        text-transform:uppercase;
                        z-index:1;
                    }

                }
            }

            &:last-child{
                
            }
        }
    }

    .secondMenu{
        flex-direction:column;
        >div{
            width:100%;
        }

        .divLog{
            height:6rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding: 0 4rem;

            >span{
                font-size:2.5rem;
                color:#f1f3f4;
            }

            >div{
                button{
                    width:10rem;
                    height:2rem;
                    display:flex;
                    span,svg{
                        height:100%;
                        width:30%;
                    }
                    span{
                        width:70%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }

                    svg{
                        background:${ props => props.colors.green1};
                        padding:3px;
                    }

                }
            }
        }

        .user{
            display:flex;
            width:100%;
            padding:.5rem 4rem 0 4rem;
            border-bottom:1px dotted ${ props => props.colors.green1};
            >ul{
                width:100%;
                display:flex;

                >li{
                    margin-right:1rem;
                    a{
                        text-transform:uppercase;
                    }
                }
            }

            >form{
                width:50%;
                display:flex;
                border-radius:10rem;
                margin-bottom:5px;
                
                input{
                    border-radius:0 0;
                    padding:10px 15px;
                    width:90%;
                    font-size:1rem;
                }
                button{
                    display:flex;
                    width:3rem;
                    background:${ props => props.colors.green1};

                    svg{
                        margin:auto;
                        font-size:1.1rem;
                    }
                }
            }
        }

        >span{
            font-size:4rem;
        }
    }  

`;