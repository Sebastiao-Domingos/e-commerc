import styled from 'styled-components'


export const Div = styled.div`
    width:100%;
    min-height:40rem;
    background:#fefefe;
    padding:5rem 4rem;


    >div{
        >div{
            display:flex;
            flex-wrap:wrap;
            padding-top:4rem;
            &:first-child{
                justify-content:space-between;
            }

            >button{
                margin-right:2rem;
            }
        }
    }
`;