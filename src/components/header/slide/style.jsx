import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    height:20rem;
    margin-top:4rem;

    .container{
        width:100%;
        .contentWrapper{
            width:90%;
            overflow:hidden;
            margin:auto;
            .wrapper{
                width:400%;
                display:flex;
                justify-content:space-between;

                >div{
                    width:24%;
                }
            }
        }
    }
    
`;