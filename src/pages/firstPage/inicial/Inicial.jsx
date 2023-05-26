import { Div } from './style'
import { Outlet }from 'react-router-dom'
import { Footer, MenuGeral  } from '../../../components/export.js'
import {log} from '../../../images/exportImages.js'
export function Inicial() {
  return (
    <Div logo = {log}>
        <MenuGeral />
        <Outlet />
        <Footer />
    </Div>
  )
}
