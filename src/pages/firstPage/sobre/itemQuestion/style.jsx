import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    height:20rem;
    display:flex;
    flex-wrap:wrap;
    margin:4rem 0 5rem 0;

    >img{
        width:40%;
        height:20rem;
    }
    >div{
        width:60%;
        padding:${ props => !props.active ? "0 7% 0 0 " : "0 7%" };


        h3{
            margin-bottom:2rem;
            line-height:2rem;
            color:${props => props.colors.green1 };
            border-left:2px solid;
            padding-left:10px;
        }
        p{
            line-height:2rem;
            &:last-child{
                margin-top:2rem;
            }
        }
    }
`;