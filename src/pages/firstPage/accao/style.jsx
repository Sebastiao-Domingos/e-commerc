import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    min-height:30rem;
    padding:4rem 0;

    >div{
        >div.header{
            padding:0 4rem;
        }

        .container{
            display:flex;
            gap:4%;
            flex-wrap:wrap;
            align-items:center;
            justify-content:space-between;
            padding:4rem 4rem 0 4rem;

        }
    }
    
`;