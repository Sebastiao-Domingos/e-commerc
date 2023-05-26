import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    height:28rem;
    /* background:linear-gradient( rgba(1,1,1,.3) , rgba(1,1,1,.3)) url(${ props => props.photo }) ; */
    background-image:url(${ props => props.photo });
`;