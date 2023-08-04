import styled , {css} from "styled-components"

export const Div = styled.div`
    width:100%;


    .header{
        padding:3rem 2rem;
        
        h2{
            ${ props => css`
                color:${ props.colors.blue};
                border-bottom:1px dotted ${ props.colors.blue };
            `}
            padding-bottom:1.5rem;
            font-size:2rem;
        }
    }
    .body{
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        padding:0 2rem;
        form >div{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            &:not(:last-child){
                justify-content:space-between;
            }
            >div{
                width:45%;
                margin-bottom:25px;
                label{
                    font-size:1.2rem;
                    font-weight:500;
                }
                >input{
                    margin:10px 0;
                    padding:12px;
                    font-size:1.1rem;
                    width:100%;
                    border-radius:4px;
                    background:transparent;
                    border: 1px solid #ccc;
                    &::placeholder{
                        color:#cccc;
                    }
                }
            }

            >button{
                margin-top:1.5rem;
            }
        }
    }
    
`;