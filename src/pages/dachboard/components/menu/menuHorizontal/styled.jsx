import styled from "styled-components"

export const Div = styled.div`
    position:fixed;
    z-index:1000;
    top:0;
    left:0;
    width:100%;
    height:5rem;
    background:${ props => props.colors.white};
    display:flex;
    align-items:center;
    box-shadow: 0 0 5px rgb(204, 204, 204); 
    color:${ props => props.colors.green1};


    >div{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 2rem;

        .dashMenu{
            img{
                margin-right:1.5rem;
                width:5rem;
                height:3rem;
            }
            h2{
                color:${ props => props.colors.green1};
                font-weight:700;
                text-transform:uppercase;
            }

            button{
                margin-right:2rem;
                background:transparent;

                >svg{
                    font-size:1.4rem;
                    color :${ props => props.colors.black} ;
                }
            }
        }

        >div{
            display:flex;
            align-items:center;
            justify-content:space-between;

            .search{
                position:relative;
                display:flex;
                align-items:center;
                justify-content:right;
                width:3rem;
                margin-right:15rem;

                input{
                    background:transparent;
                    position:absolute;
                    right:1.5rem;
                    padding:10px 0;
                    border-bottom:1px solid ${ props => props.colors.green1};
                    font-size:1rem;
                    width:0rem;
                    transition:all .5s ;
                    &:focus{
                        width:20rem;
                    }
                    &::placeholder{
                        color:black;
                    }
                }

                >svg{
                    color:${ props => props.colors.green1};
                    font-size:1.5rem;
                    cursor:pointer;
                }
                &:hover  >input{
                    width:20rem;
                }
            }

            .user{
                display:flex;
                position:relative;
                padding:1rem;

                &:hover{
                    ul{
                        display:block;
                    }
                }

                button{
                    position:relative;
                    background:transparent;
                    font-size:1.5rem;
                    color:${props=> props.colors.blue};

                    >svg{
                        border-radius:50%;
                        background:#fefefe;
                        color:${props=> props.colors.blue};
                        padding:1px;
                        width:2rem;
                        height:2rem;
                    }
                    >div{
                        position:absolute;
                        top:-3px;
                        left:23px;
                        width:10px;
                        height:10px;
                        border-radius:50%;
                        background:${ props => props.colors.blue};
                    }
                }

                ul{
                    display:none;
                    position:absolute;
                    list-style:none;
                    width: 10rem;
                    padding:15px;
                    background:${ props =>props.colors.white};
                    box-shadow: 0 0 3px  #ccc;
                    top:4rem;
                    right:12px;
                    transition:all .6s;

                    li{
                        padding:5px 0 ;
                        margin:5px 0;
                        border-bottom:1px dotted transparent;

                        a{
                            color:black;
                            text-decoration:none;
                        }

                        &:hover{
                            border-bottom-color:${ props => props.colors.blue};
                        }
                    }
                }

            }
        }
    }

`;