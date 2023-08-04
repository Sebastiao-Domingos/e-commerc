import styled from 'styled-components'
import {ColorContext } from '../../../contexts/export.js'
import {useContext } from 'react'

export const Div = styled.div`
    width:20rem;
    min-height:15rem;
    margin:auto;
    background: ${ props => props.colors.black};
    border-radius:2px;
    padding:20px;
    display:flex;
    justify-content: center;
    align-items:center;
    z-index:3000;
`

export const Content = ({children }) => {
  const { colors , } = useContext(ColorContext );
  return (
    <Div colors ={ colors}>{children}</Div>
  )
}
