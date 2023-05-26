import {Div} from './style'
import {MotherModal , Content } from '../export.js'
import {FaCheckCircle,FaUserCheck } from 'react-icons/fa'

export const Allowed = ({text,user }) => {
  return (
    <MotherModal>
        <Content>
            <Div>
                <div>
                    { !user ? <FaCheckCircle /> : <FaUserCheck />}
                </div>

                <p> {text ? ( text ) : "Log In feito com sucesso ! "} </p>

            </Div>
        </Content>
    </MotherModal>
  )
}
