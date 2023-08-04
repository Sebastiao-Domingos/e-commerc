import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    padding:3rem 4rem; 

    .header{
        display:flex;
        justify-content:space-between;
        border-bottom:1px dotted ${ props => props.colors.blue};
        padding-bottom:1rem;

        h2{
            color:${ props => props.colors.blue};
            font-size:1.9rem;
        }

        div{
            button{
                background:transparent;
                
                &:first-child{
                    margin-right:2rem;
                    svg{
                        color:${ props => props.colors.green1};
                    }
                }
                
                &:last-child{
                    svg{
                        color:#f15050;

                    }
                }
                
                >svg{
                    font-size:1.7rem;
                }
            }

        }
    }

    .body{

        ol li , ul li{
            font-size:1.1rem;
            padding:1rem 0;
            
            &:not(:last-child){
                border-bottom:1px dotted rgba(204, 204, 204, 0.42);
            }
            &:hover{
                background:rgba(77, 126, 199, 0.1);
            }
        }

        .firstContent{
            padding:3rem 0 ;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;

            .context{
                width:30rem;
                ul{
                    list-style:none;
                }
            }
            .image{
                img{
                    width:25rem;
                    
                }
            }
            
        }
        
        h3{
            font-size:1.5rem;
            margin-bottom:2rem;
            border-left:5px solid ${ props => props.colors.green1};
            padding:5px 9px;
        }
        .secondContent{
            margin-top:1rem;
            p{
                line-height:1.7rem;
                font-size:1.1rem;

            }
        }
        .thirdContent{
            margin-top:2rem;

            ol{
                margin-left:15px;

                li{
                    padding:1rem 0;
                    font-size:1.1rem;
                }
            }
        }
    }

`;