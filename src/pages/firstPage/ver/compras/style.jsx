import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    min-height:40rem;
    background:#fefefe;
    padding-top:3rem;

    >div{
        padding: 0 4rem;
    }

    .container{
        .compras{
            width:100%;
           table{
                width:100%;
                border-spacing:0;
                margin:2rem 0;
                td{
                    padding:20px;
                }
                thead{
                    tr{
                        td{
                            background:${ props => props.colors.black};
                            color:#fefefe;
                            font-size:1.1rem;
                        }
                    }
                }
                tbody{
                    tr {
                        &:hover{
                            td{
                                background:rgba(218, 217, 217, 0.3);
                            }
                        }
                        td{
                            font-size:1.1rem;

                            >button{
                                width:6rem;
                                padding:10px;
                                border:1px solid;
                                background:rgba(133, 17, 17, 0.7);
                                color:#fefefe;
                                border:1px solid;
                                >svg{
                                    font-size:1rem;
                                }

                                &:hover{
                                    background:transparent;
                                    color:rgba(133, 17, 17, 0.7);
                                    border-color:rgba(133, 17, 17, 0.7)
                                }

                            }
                            a{
                                text-decoration:none;
                                background:${ props => props.colors.green1};
                                color:#fefefe;
                                padding:10px;
                                border:1px solid;
                                &:hover{
                                    background:transparent;
                                    border-color:${ props => props.colors.green1};
                                    color : ${ props => props.colors.green1};
                                }
                            }
                        }

                        &:not(:last-child){
                            td{
                                border-bottom:1px dotted ${ props => props.colors.blue};
                            }
                        }
                    }
                }
           }
            
        }
    }
`;