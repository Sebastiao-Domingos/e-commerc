import styled from 'styled-components'

export const Div = styled.div`
    position:relative;
    width:15rem;
    height:12rem;
    border-radius:3px;
    box-shadow:0 0 10px ${ props => props.colors.black };
    padding:1rem;

    >h4{
        color : ${ props => props.colors.blue };
        margin-bottom:1rem;
        padding-bottom:7px;
        border-bottom:1px dotted;
    }

    >ul{
        list-style:none;
        li{
            margin:1rem 0;
        }
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
`;