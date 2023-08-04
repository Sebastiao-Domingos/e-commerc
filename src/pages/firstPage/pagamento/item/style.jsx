import styled from 'styled-components'

export const Div = styled.div`
    position:relative;
    width:22rem;
    height:20rem;
    border-radius:3px;
    box-shadow:0 0 6px #949393;
    padding:1rem;
    display:flex;
    flex-direction:column;
    >h4{
        color : ${ props => props.colors.blue };
        margin-bottom:1rem;
        padding-bottom:7px;
        border-bottom:1px dotted;
    }

    label{
        position:absolute;
        top:10px;
        right:10px;
        width:20px;
        height:20px;
        border:4px solid ${ props => props.colors.black };
        border-radius:50%;
        background:${ props => props.active ? props.colors.green1 : "transparent"};
    }

    >img{
        margin:auto;
    }
`;