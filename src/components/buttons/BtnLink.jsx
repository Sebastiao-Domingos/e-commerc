import styled ,{ css} from 'styled-components'
import { Link } from 'react-router-dom'

export const Btn = styled.li`
    position:relative;
    display:flex;
    align-items:center;
    border-top:2px solid transparent;
    border-color:${ props => props.active ? props.colors.blue : "transparent"};


    &:hover{
        border-color:${ props => props.colors.blue };
        
        >svg{
            transform:rotateX(160deg);
        }

        >ul{
            display:block;
        }
    }
    >svg{
        color:${ props => props.colors.blue };
    }
    a{
        z-index:1;
        color:${ props => props.colors.green1};
        text-decoration:none;
        padding:7px 6px;
        font-weight:600;
    }

    >ul{
        display:none;
        flex-direction:column;
        position:absolute;
        height:17rem;
        width:16rem;
        top:102%;
        left:0;
        padding-top:1.5rem;
        z-index:1000;
        background:${ props => props.colors.white };
        box-shadow: 0 0  3px #ccc;

        >li{
            display:flex;
            margin:10px 0;
            border-top:1px dotted transparent;
            font-size:1rem;
            padding:10px;
            color:${ props => props.colors.green1 };
            a{
                font-size:1rem;
                padding:7px;
                color:${ props => props.colors.green1 };
            }
            &:hover{
                border-top-color:${ props => props.colors.blue };
            }
        }
    }
`;








export function BtnLink( {children,Icon, path , text ,active, event , colors }) {
  return (
    <Btn active = { active } onClick = { event} colors = {colors }>
        <Link to = { path }> {text} </Link>

        { Icon && ( <Icon />)}
        { children }
    </Btn>
  )
}
