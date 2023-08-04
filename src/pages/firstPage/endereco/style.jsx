import styled from 'styled-components'


export const Div = styled.div`
    width:100%;
    min-height:40rem;
    padding:5rem 4rem;

    .container{
        padding:2rem 0;
        margin:auto;
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;

        >div{
            width:37rem;

            >p{
                font-size:1.4rem;
                padding-bottom:20px;
                line-height:1.7rem;
            }
           &:first-child{

                >form{
                    display:flex;
                    flex-direction:column;

                    >div{

                        &:not(:last-child){
                            display:flex;
                            flex-direction:column;
                            margin-top:1rem;
                            input{
                                margin:5px 0;
                                padding:12px;
                                background:#f6f6f6;
                                border:1px solid #ccc;
                                font-size:1rem;
                                border-radius:2px;

                                &::placeholder{
                                    color:black;
                                }
                            }
                        }
                        &:last-child{
                            margin-top:1.5rem;
                            button{
                                margin-right:2rem;
                            }
                        }
                    }
                }
           }

           &:last-child{
                ul{

                    li{
                        position:relative;
                        display:flex;
                        margin:1rem 0;
                        border:1px dotted ${ props => props.colors.green1};
                        min-height:8rem;
                        cursor:pointer;

                        &:last-child{
                            margin-top:4rem;

                            label{
                                background:${ props => props.active2 ? props.colors.green1 : "transparent" };
                            }
                        }
                        &:first-child{
                            label{
                                background:${ props => props.active1 ? props.colors.green1 : "transparent" };
                            }
                        }
                        
                        >div{
                            display:flex;
                            &:first-child{
                                padding-bottom:1rem;
                                justify-content:center;
                                align-items:center;
                                width:15rem;

                                label{
                                    position:absolute;
                                    left:10px;
                                    top:10px;
                                    width:20px;
                                    height:20px;
                                    border-radius:50%;
                                    margin-right:5rem;
                                    border:4px solid ${ props => props.colors.black};
                                }

                                >span svg{
                                    font-size:2rem;
                                }
                            }

                            &:last-child{
                                flex-direction:column;
                                padding:1.5rem 10px;

                                h4{
                                    margin-bottom:1rem;
                                    color:${props => props.colors.blue};
                                    padding-bottom:5px;
                                    border-bottom:1px dotted;
                                }
                            }

                            img{
                                width:70px;
                            }
                        }
                    }
                }


           }
        }
        
    }
`;