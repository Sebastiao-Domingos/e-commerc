import { StyledHeader } from './style'
import { ColorContext } from '../../contexts/ColorProvider'
import { useContext } from 'react'
import { Destac } from './slide/Destac'
export default function Header({ children }) {
    const { colors  } = useContext( ColorContext );
   return (
    <StyledHeader colors = { colors } >
      { children }
      <Destac />
    </StyledHeader >
  )
}
