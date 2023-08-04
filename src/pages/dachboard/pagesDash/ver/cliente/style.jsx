import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    padding:4rem 3rem;

    .header{
        display:flex;
        justify-content:space-between;
        border-bottom:1px dotted ${props => props.colors.blue};
        padding-bottom:1rem;

        h2{
            font-size:2rem;
            color:${ props => props.colors.blue};
        }
        >div{
            font-size:1.2rem;
        }
    }

    .body{
        padding-top:2rem;

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
                        font-size:1.2rem;
                        border-bottom:1px solid ${props => props.colors.green1};
                        padding-bottom:1rem;
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
                            background: rgba(153, 149, 149, 0.1);
                        }
                    }
                    td{
                        padding:1.5rem ;
                        font-size:1.1rem;

                        &:first-child{ 
                            color : ${props => props.colors.green1 };
                            font-size: 2rem;
                        }
                
                        a ,button{
                            text-decoration:none;
                            color:${props => props.colors.green1 };
                            font-size:1.5rem;
                            position:relative;
                            background:transparent;

                            &:hover > span{
                                display:block;
                            }
                            
                            span{
                                color:black;
                                position:absolute;
                                display:none;
                                font-size:.9rem;
                                width:9rem;
                                top:-3.5rem;
                                left:-3rem;
                                background:${ props => props.colors.white};
                                padding:10px;
                                border-radius:2px;
                                box-shadow:0 0 3px #ccc;
                                transition:all 1s;

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
                }
            }
        }
    }

`;