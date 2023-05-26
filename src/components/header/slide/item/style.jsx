import styled from 'styled-components'

export const Div = styled.div`
    height:20rem;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .contentText{
        width:60%;
        .price{
            margin-bottom:2rem;
            border-top:1px dotted ${ props => props.colors.blue };
            padding-top:4rem;
            p{
                font-size:2rem;
                color:${ props => props.colors.green1};
                span{
                    font-size:3.5rem;
                    color:${ props => props.colors.blue}
                }
            }
        }
        .text{
            h2{
                font-size:2.5rem;
                font-weight:500;
                color:${props =>props.colors.green1};
                margin-bottom:.6rem;
            }
            p{
                color:${ props =>props.colors.black};
                margin-bottom:2rem;
                font-size:1.2rem;
                line-height:1.6rem;
            }
        }
    }

    .image{
        img{
            width:25rem;
            height:20rem;
        }
    }
`;