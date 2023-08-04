import styled from "styled-components";

export const Div = styled.div`
    width:100%;
    min-height:40rem;

    >div{
        width:100%;
        border:5px;
        background:${ props => props.colors.white };

        .header{
            width:100%;
            position:relative;

            h3{
                margin-bottom:1rem;
                color:${ props => props.colors.green1};
                border-left:3px solid ;
                padding: 3px 5px;
            }

            ul{
                list-style:none;

                li{
                    margin-bottom:1rem;
                    padding-bottom:7px;

                }
            }

            .contentQRCode{
                position:absolute;
                right:0;
                top:50%;
                transform:translateY(-50%) scale(.5);
            }
        }

        .body{
            width:100%;
            margin-top:1rem;
            table{
                width:100%;
                border-spacing:0px;
                thead{
                    tr{
                        td{
                            border-bottom:1px solid ;
                            background:${ props => props.colors.black };
                            color:${ props => props.colors.white };
                            padding:15px;
                        }
                    }
                }
                tbody{
                    tr{
                        &:not( :last-child ){
                            td{
                                border-bottom:1px dotted ;
                            }
                        }
                        td{
                            padding:7px 15px;
                            background:rgba(204, 204, 204, 0.3);
                            font-weight:500;
                            font-size:1rem;
                      
                            img{
                                width:50px;
                                height:50px;
                                border-radius:50%;
                            }
                        }
                    }
                }
                tfoot{
                    width:100%;
                   tr{
                        td{
                            padding:15px;
                            font-size:1.7rem;
                        }
                        .preco{
                            background:${ props => props.colors.black};
                            color:${ props=> props.colors.white};
                        }
                   }
                }
            }
        }
    }
`;