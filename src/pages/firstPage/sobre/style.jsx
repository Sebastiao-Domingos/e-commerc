import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    min-height:40rem;
    padding:3rem 0rem;

    >div{
        width:100%;
        .header{
            padding:0 4rem 0 3rem;
            display:flex;
            align-items:center;
            gap:2rem;
            border-bottom:1px dotted ${ props => props.colors.green1};

            >img{
                width:9rem;
            }

            h3{
                font-size:2rem;
                color : ${ props => props.colors.blue};
            }
        }
        .containerSlider{
            width:100%;
            height:30rem;
            padding:2rem 4rem;

            >button{
                position:absolute;
                transform:translateY(-50%);
                top:60%;
                background:transparent;
                padding:5px;
                border-radius:2px;
                transition:all .5s ;
                z-index:1000;
                background:rgba(88, 81, 81, 0.6);

                >svg{
                    font-size:2.5rem;
                    color:${ props => props.colors.blue};
                    background:transparent;
                }

                &:last-child{
                    right:3.5rem;
                }
                &:first-child{
                    left:3rem;
                }

                &:hover{
                    background:${ props => props.colors.black};
                    border:1px solid ${ props => props.colors.green1};
                    >svg{
                        color:${ props => props.colors.green1};
                    }
                }
            }
            .contentSlider{
                position:relative;
                .contentWrapper{
                    overflow:hidden;
                    .wrapper{
                        display:flex;
                        gap:5%;
                        width:475%;
                        padding-right:5rem;
                    }
                }

                .views{
                    width:110px;
                    display:flex;
                    justify-content:space-between;
                    height:15px;
                    position:absolute;
                    transform:translateX(-50%);
                    bottom:10px;
                    left:50%;
                    z-index:1;

                    >div{
                        width:15px;
                        height:15px;
                        background:${props => props.colors.blue};
                    }
                    .active{
                        transform:rotate(45deg);
                    }
                }
            }
        }

        .body{
            min-height:30rem;
            padding:4rem;

            .question{
                display:flex;
                align-items:center;
                border-bottom:1px dotted ${ props => props.colors.green1 };

                >img{
                    width:100px;
                }

                >h3{
                    margin-left:2rem;
                    font-size:2rem;
                    color:${props => props.colors.blue};
                }
            }
        }
    }


`;