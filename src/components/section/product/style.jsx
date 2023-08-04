import styled from 'styled-components'



export const Div = styled.div`
    width:20rem;
    min-height:18rem;
    border-bottom:1px solid ${ props => props.colors.green1};
    padding-bottom:1rem;
    transition:all .5s;



    >img{
        height:12rem;
        width:100%;
    }

    .catalogo{
        padding:5px 0;

        h3{
            margin-bottom:.6rem;
            color:${ props => props.colors.green1};
        }

        .price{
            color:${ props => props.colors.green1};
            margin:15px 0;
            span{
                font-size:2rem;
                color:${ props => props.colors.blue}
            }
        }

        .description{
            font-size:.8rem;
            margin:10px 0;

            button{
                color: ${ props => props.colors.blue};
                font-style:italic;
                background:transparent;
                border-bottom:1px solid;
                font-weight:600;
            }
        }

        .stars{
            margin-bottom:1rem;
            display:flex;
            justify-content:space-between;
            svg{
                color:${ props => props.colors.green1};
            }

            p{
                &:last-child{
                    color:${props =>props.colors.blue};
                }
            }
        }


    }

    &:hover{
        transform:scale(1.1);
    }
`;