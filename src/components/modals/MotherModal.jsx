import styled from 'styled-components'

export const Div = styled.div`
    position:fixed;
    display:flex;
    z-index:1000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(14, 45, 53, 0.9);
`;


export const MotherModal = ({children }) => {
  return (
    <Div>
        {children }
    </Div>
  )
}
