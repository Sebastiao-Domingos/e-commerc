import styled from 'styled-components'

export const Btn = styled.button`
    padding:12px 0;
    width:${ props => props.width };
    font-size:1rem;
    text-align:center;
    border-radius:2px;
    background: ${ props => props.backColor };
    color:white;
    border:1px solid transparent;
    transition:all .6s ease-in-out;

    &:hover{
        border-color:${ props => props.backColor };
        background:transparent;
        color:${ props => props.backColor };
    }
`;


export default function BtnNormal({ width , backColor,text, event }) {
  return (
    <Btn width = { width } backColor = { backColor } onClick = { event } >{text}</Btn>
  )
}
