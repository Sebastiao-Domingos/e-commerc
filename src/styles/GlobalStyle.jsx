import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0px;
        margin:0px;
        border:none;
        box-sizing:border-box;
        outline : 0;
        font-family: sans-serif;
        line-height:1.2rem;
    }
    body,html{
        background:#ffffff;

    }
    button{
        cursor:pointer;
    }
`;