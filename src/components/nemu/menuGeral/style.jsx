import styled from 'styled-components'

export const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    width:100%;
    height:4rem;
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
                    text-transform:uppercase;
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
                                border-color:${ props => props.colors.blue};
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
                        background:${ props => props.colors.blue };
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
        }

        .userMenu{
            position:relative;
            
            &:hover{
                >ul{
                    display:block;
                }
            }

            p{
                cursor:pointer;
                display:flex;
                justify-content:center;
                align-items:center;
                >svg{
                    font-size:2rem;
                    margin-right:5px;
                }
            }
            >ul{
                position:absolute;
                display:none;
                background:${ props => props.colors.green1};
                width:12rem;
                left:-80px;
                padding:10px;
                overflow:hidden;

                li a{
                    font-size:1rem;
                    width:100%;
                }
                li{
                    margin:15px 0;
                    display:flex;

                    &:first-child{
                        border-bottom:1px solid;
                        font-size:.8rem;
                    }

                    a{
                        padding:5px 0;
                        border-bottom:1px solid transparent;

                        &:hover{
                            border-bottom-color:${ props => props.colors.blue};
                        }  
                    }
                }
            }
        }
    }

`;