import {Div} from './style'
import {MotherModal ,Content } from '../export.js'
import {FaUserAltSlash } from 'react-icons/fa'


export const Warn = ({ Icon , text1 ,text2 }) => {
  return (
    <MotherModal>
        <Content>
            <Div>
                <div>
                    { Icon && <Icon/> }
                </div>
                <p>{ text1 }</p>
                <p>{ text2 }</p>
            </Div>
        </Content>
    </MotherModal>
  )
}
