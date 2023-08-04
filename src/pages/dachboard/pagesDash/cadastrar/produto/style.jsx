import styled ,{css} from "styled-components"

export const Div = styled.div`
    width:100%;
    height:auto;
    border-radius:5px;

    .header{
        padding:3rem  2rem 0  2rem ;
        border-radius:5px 5px 0 0 ;
        h2{
            ${ props => css`
                color:${props.colors.blue};
                border-bottom:1px dotted ${props.colors.blue} ;
            `}
            font-size:2rem;
            padding-bottom:1.5rem;
        }
    }

    .body{
        padding:2rem;

        >form{
             width:100%;
             input , textarea{
                padding:10px;
                border-radius:4px;
                font-size:1.1em;
                width:100%;
                margin:10px 0;
                background:transparent;
                border: 1px solid #ccc;

                &::placeholder{
                    color:#ccc;
                }
             }

             label{
                font-weight:500;
                font-size:1.2rem;
                cursor:pointer;
            }

             >div{width:100%; }
             

             .first , .div_foto , .second >div ,.second .precaussoes{
                display:flex;
                justify-content:space-between;
                flex-wrap:wrap;
             }
             .first div , .second .precaussoes div{
                display:flex;
                flex-direction:column;
                width:31%;
                margin-bottom:2rem;

             }
          
             .div_foto{
                 width:100%;
                 >div{
                    position:relative;
                    width:45%;

                    input{
                        width:100%;   
                    }
                    #camera{
                        position:absolute;
                        left:0px;
                        top:32px;
                        font-size:2.5rem;
                    }

                    #foto{
                        display:none;
                    }
                }
             }

             .second{
                width:100%;

                margin:2rem 0;
                h4{
                    color : ${ props => props.colors.blue};
                    font-size:1.2rem;
                }

                .precaussoes{
                    width:100%;
                    margin-top:1.5rem;
                    div{
                        width:46%;
                        flex-wrap:wrap;

                        input{
                            width:100%;
                        }
                    }
                }

                textarea{
                    margin-top:1.5rem;
                    width:100%;
                }

             }

             button{
                width:100%;
                padding:15px 0;
                font-size:1rem;
                font-weight:600;
                border-radius:2px;
                background:${ props=> props.colors.green1};
                color:#ffffff;
                text-transform:uppercase;
                border:1px solid transparent;
                transition:all .3s;

                &:hover{
                    border-color:${ props=> props.colors.green1};
                    color:${ props => props.colors.green1};
                    background:transparent;
                }
                
             }


        }

    }
`;