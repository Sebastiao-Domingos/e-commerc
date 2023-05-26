import styled from 'styled-components'

export const Div = styled.div`
    display:none;
    position:absolute;
    left:-200px;
    top:50px;
    width:25rem;
    min-height:16rem;

    background:${ props => props.colors.black};
    border-radius:5px;
    padding:20px;

    h3{
        color:${ props => props.colors.green1};
        border-bottom:1px solid ;
        padding-bottom:7px;
    }

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
                    img{
                        width:40px;
                    }

                    >button{
                        background:transparent;
                        color:#fefefe;
                        font-size:1.2rem;
                        
                        &:first-child{
                            margin-right:.6rem;
                        }
                        &:last-child{
                            margin-left:.6rem;
                        }
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