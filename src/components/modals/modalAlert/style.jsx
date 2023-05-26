import styled from 'styled-components'

export const Div = styled.div`
    width:20rem;
    min-height:13rem;
    margin:auto;
    background: ${ props => props.colors.black};
    border-radius:2px;
    padding:20px;
    text-align:center;
    div.content{
        margin:1rem 0 2rem 0;
        text-align:center;

        >svg{
            color:#e21515;
            font-size:2rem;
        }
        p{
            color:#fefefe;
            font-size:.9rem;
            margin-top:1rem;
        }

    }
    .buttons{
        margin:auto;
        button{
            font-size:1rem;
            padding:5px;

            &:first-child{
                margin-right:1rem;
            }
        }
    }
`;