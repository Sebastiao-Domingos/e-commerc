import styled from 'styled-components'

export const Nav = styled.nav`
    width:100%;
    height:8rem;
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

    ul li { list-style:none; color:#ffffff; cursor:pointer;}


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

            >img{
                height:8rem;
            }

            >div{
                >div{
                    position:relative;
                    >button{
                        width:10rem;
                        height:2rem;
                        display:flex;
                        span,svg{
                            height:100%;
                            width:30%;
                            color:white;
                        }
                        span{
                            width:70%;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            background:${ props => props.colors.blue };
                        }

                        svg{
                            background:${ props => props.colors.green1};
                            padding:3px;
                        }

                    }
                }
            }
        }

        .goUp{
            position:fixed;
            z-index:1000;
            top:7px;
            right:20rem;
        }
        .goDown{
            position:relative;
            display:block;
            border:2px solid;
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

            >form.normalSearch{
                width:50%;
                display:flex;
                border-radius:10rem;
                margin-bottom:5px;
                
                input{
                    border-radius:0 0;
                    padding:10px 15px;
                    width:90%;
                    font-size:1rem;
                    border:2px solid ${ props => props.colors.blue};
                }
                button{
                    display:flex;
                    width:3rem;
                    background:${ props => props.colors.blue};

                    svg{
                        margin:auto;
                        font-size:1.1rem;
                        color:#fefefe;
                    }
                }
            }

            form.searchUp{
                position:fixed;
                top:12px;
                left:50%;
                z-index:1000;
                height:5rem;

                input{ 
                    display:${ props => props.focused ? "block" : "none"};
                    position:absolute;
                    width:20rem;
                    top:2.2rem;
                    padding:10px;
                    border-bottom:1px solid ;
                    background:${ props => props.colors.white};
                    color:${ props => props.colors.black};
                    font-size:1rem;
                }

                button{
                    background:transparent;
                    >svg{
                        color:#fefefe;
                        font-size:1.3rem;
                    }
                }
                &:hover{
                    input{
                        display:block;
                    }
                }
            }
        }
        >span{
            font-size:4rem;
        }
    }  

`;