import styled ,{keyframes}from 'styled-components'


const animateIcon = keyframes`
    0%{
        transform:scale(.5);
    }
    50%{
        transform:scale(1.5);
    }
    100%{
        transform:scale(1);
    }

`
export const Div = styled.div`
   text-align:center;
   margin:auto;
   
   >div{
        >svg{
            font-size:3rem;
            color:green;
            animation:${animateIcon } 2s forwards;    
        }
   }

   p{
    color:white;
    margin-top:2rem;
   }
`;