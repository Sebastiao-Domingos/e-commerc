import {Div} from "./style"
import { Header , MenuLoja , Section } from '../../../components/export.js'

export function Loja() {
  document.title ="Loja Online Solevo"

  return (
    <Div>
        <Header>
            <>
                <MenuLoja />
            </>
        </Header>

        <Section />
    </Div>
  )
}
