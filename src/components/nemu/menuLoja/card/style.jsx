import styled ,{css} from 'styled-components'

export const Div = styled.div`
    display:none;
    flex-direction:column;
    justify-content:space-between;
    position:absolute;
    left:-290px;
    top:50px;
    width:28rem;
    min-height:16rem;
    max-height:33rem;
    background:${ props => props.colors.black};
    border-radius:5px;
    padding:20px;

    h3{
        color:${ props => props.colors.green1};
        border-bottom:1px solid ;
        padding-bottom:7px; 
    }

    .bying{
        max-height:30rem;
        ${ props => props.quantity > 6 && css`
            overflow-y:scroll;
        `}

        table{
            margin-top:1rem;
            width:100%;
            border-spacing:0;
            tr{ display:flex;
                justify-content:space-between;
                align-items:center;
                border-bottom:1px dotted;
            }
            tr td { font-size: .8rem; padding: 2px ; width:25%; }
            thead{
                tr{
                    td{
                        color : ${ props => props.colors.green1};
                    }
                }
            }
            tbody{
                tr{
                    td{
                        padding:7px;
                        text-align:center;
                        img{
                            width:40px;
                            height:30px;
                        }


                        span{
                            margin-left: 15px;
    
                            >svg{
                                color:#e25d5d;
                            }
                        }
                    }
                }
    
            }
        }
    }

    .buttons{
        margin-top:3rem;
        display:flex;
        gap:15px;
        width:100%;

        >button{
            font-size:.8rem;
        }
    }
`;