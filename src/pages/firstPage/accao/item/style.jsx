import styled from "styled-components"

export const Div = styled.div`
    width:22rem;
    height:35rem;
    background:${ props => props.colors.black};
    margin-bottom:4%;
    transition:all 1s ease-in-out;
    border-radius:0 0 10px 10px;

    &:hover{
        transform:scale(1.16);
    }
    >img{
        width:100%;
        height:60%;
    }

    >div{
        padding:1rem;

        h3{
            margin-bottom:1rem;
            color:${props => props.colors.green1};
        }

        p{
            font-size:.9rem;
            line-height:1.5rem;
            color:#fff;
        }
    }
`;