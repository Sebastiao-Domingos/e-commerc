import styled from 'styled-components'
import { ColorContext } from '../../../../contexts/export.js'
import {useContext } from 'react';
import {log } from '../../../../images/exportImages.js'

export const Div = styled.div`
    display:flex;
    align-items:center;
    border-bottom:1px solid ${ props => props.colors.green1};

    img{
        width:120px;
    }

    h2{
        color:${props => props.colors.blue};
        font-size:2rem;
        margin-left:2rem;
    }

`;


export const Header = ({title}) => {

    const { colors ,} =useContext(ColorContext)
  return (
    <Div className = "header" colors ={colors} >
        <img src={ log } alt="logo da empresa" />
        <h2>{ title}</h2>
    </Div>
  )
}




