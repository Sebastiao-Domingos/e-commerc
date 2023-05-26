import styled from 'styled-components'


export const Div = styled.div`
    width:100%;
    min-height:50rem;
    padding: 4rem  0 4rem 2rem;

    >div{
        >img{
            width:100%;
            height:15rem;
        }
        .content_text{
            padding-top:2rem;

            h3{
                font-size:2rem;
                color:${ props => props.colors.blue};
                margin-bottom:1rem;
            }
            p.price{
                width:100%;
                text-align:right;
                margin-bottom:1rem;
                
                span{
                    font-size:2.5rem;
                    color:${props => props.colors.green1};
                }
                
            }

            .info{
                margin:1rem 0;
                line-height:1.5rem;
            }


            .especification ,.precaussoes{
                /* background:${ props => props.colors.black}; */
                /* width:20rem; */
                border-radius:5px;
                min-height:14rem;
                padding:1.5rem 0;
                
                h4{
                    color:${ props => props.colors.green1};
                    border-left:3px solid;
                    padding-left:5px;

                }

                ul{
                    list-style:none;
                    li{
                        margin:1rem 0;
                    }
                }
            }
            
        }

        .buttons{
            button{
                margin-right:2rem;
            }
        }
    }
`;