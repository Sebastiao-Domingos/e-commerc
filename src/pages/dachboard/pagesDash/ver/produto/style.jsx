import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    height:auto;
    padding:2rem 3rem 3rem  3rem;


    .header{
        width:100%;
        height:4rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom: 1px dotted ${ props => props.colors.blue};
        
        h2{
            font-size:2rem;
            color : ${ props=> props.colors.blue};
        }

        p{
            font-size:1.2rem;

            select{
                margin-left:1rem;
                padding:8px 20px;
                font-size:1rem;
                /* background:${ props => props.colors.black}; */
                font-weight:600;
                box-shadow: 0 0 5px #ccc;
            }
        }
    }

    .body{
        padding-top :1rem;

        table {
            width:100%;
            border-spacing:0;

            td{ text-align : center ;}
            thead{
                tr{
                    td{
                        &:first-child{
                            padding-left:2rem;
                        }
                        font-size:1.1rem;
                        border-bottom:1px solid ${props => props.colors.green1};
                        padding:1.5rem 0;
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
                    &:hover{
                        td{
                            background: rgba(179, 176, 176, 0.1);
                        }
                    }
                    td{
                        padding:1rem 1.5rem ;
                        font-size:1.1rem;


                        &:first-child{ 
                            color : ${props => props.colors.green1 };
                            font-size: 2rem;
                            >img{
                                width:50px;
                                height:50px;
                                border-radius:50%;
                            }
                        }
                        &:last-child{ 
                            a {
                                color : #be5a5a ;
                            }
                        }

                        a , button{
                            background:transparent;
                            text-decoration:none;
                            color:black;
                            position:relative;

                            &:hover > span{
                                display:block;
                            }
                            
                            span{
                                position:absolute;
                                display:none;
                                font-size:.9rem;
                                width:9rem;
                                top:-3.5rem;
                                left:-3rem;
                                padding:10px;
                                border-radius:2px;
                                box-shadow:0 0 3px #ccc;
                                transition:display 1s;
                                background:#fefefe;
                                color:black;


                                &::after{
                                    position:absolute;
                                    content:"";
                                    border:8px solid transparent;
                                    border-color:#fefefe  transparent transparent transparent;
                                    left:35%;
                                    bottom:-16px;
                                }
                            }
                        }
                        button{
                            font-size:1.2rem;
                            color : ${props => props.colors.green1 };
                        }
                    }
            }
        }
        
        ul{
            width:100%;

            >li , >li div { display : flex ; justify-content : space-between ; align-items:center;};
            
            >li{
                height:5rem;
                margin:1.5rem 0;
                padding:5px 10px;
                box-shadow: 0 0 2px rgba(172, 168, 168, 0.6);
                background:${ props => props.colors.black};
                border-radius:2px;
                >div{
                    width:20rem;

                    &:first-child{
                        width:25rem;
                        img{
                            width:4rem;
                            height:4rem;
                            border-radius:50%;
                        }
                    }
                    &:last-child{
                        padding-right:2.5rem;
                        a{
                            text-decoration:none;
                            color:#ffff;
                            position:relative;

                            &:hover > span{
                                display:block;
                            }
                            
                            span{
                                position:absolute;
                                display:none;
                                font-size:.9rem;
                                width:9rem;
                                top:-3.5rem;
                                left:-3rem;
                                background:${ props => props.colors.black};
                                padding:10px;
                                border-radius:2px;
                                box-shadow:0 0 3px;
                                transition:display 1s;

                                &::after{
                                    position:absolute;
                                    content:"";
                                    border:8px solid transparent;
                                    border-color:#fefefe  transparent transparent transparent;
                                    left:35%;
                                    bottom:-16px;
                                }
                            }

                            >svg{
                                font-size:1.3rem;
                            }
                        }
                    }
                }
            }

        }
    }

`;