import styled from "styled-components";
import {Div} from "../../produto/detalhe/style"
export const DivContent = styled(Div)`
    height:40rem;
   .image{
        position:absolute;
        right:10rem;
        >svg{
            font-size:25rem;
            background:rgba(105, 223, 223, 0.02);
            border-radius:50%;
            padding:10px;
            color:rgba(204, 204, 204, 0.2);
        }
        
   } 

   .header{
        >div{
            button{
                position:relative;
                &:not(:last-child){
                    color:${props=>props.colors.green1};
                }
                &:first-child{
                    margin:0;
                }
                &:not(:first-child){
                    margin-left:3rem;
                }
                &:hover{
                    span{
                        display:block;
                    }
                }

                span{
                    position:absolute;
                    display:none;
                    top:-34px;
                    left:-20px;
                    padding:7px;
                    box-shadow:0 0 2px #ccc;
                    transition:all .4s;
                    color:black;
                    font-weight:600;
                }
            }
            
        }
   }
`;