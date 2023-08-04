import styled from "styled-components"
import {Div} from "../../cadastrar/produto/style";
export const DivEdite = styled(Div)`
    width:100;
    min-height:40rem;

    .header{
        position:relative;
        button{
            position:absolute;
            right:2rem;
            top:3rem;
            background:transparent;
            color:#cc2828;
            font-size:2rem;
        }
    }

    form .foto{
        position:relative;


        img{
            position:absolute;
            top:20px;
            left:70px;
            width:8rem;
            height:5rem; 
        }
    }
    
    form div.buttonsEdit{
        
        button{
            width:16rem;
            margin-right:5rem;
        }
    }
`;