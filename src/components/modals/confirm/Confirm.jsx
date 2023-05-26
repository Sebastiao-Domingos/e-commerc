import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ColorContext,UserContext } from '../../../contexts/export.js'
import {Div } from './style'
import BtnNormal  from '../../buttons/BtnNormal'
import { MotherModal , Content } from '../export.js'
import {FaUser } from 'react-icons/fa'
export function Confirm( { event1 , event2, text }) {
    const { colors } = useContext( ColorContext );
    const { user , } = useContext(UserContext);

    // const nav = useNavigate();

    // const handleNavigate = ()=> {
    //     nav("/inicial/signin");
    // }
  return (
    <MotherModal>
        <Content>
            <Div colors = { colors }>
                <p><FaUser /> { user.userdate.name }</p>
                <p>{text} </p>

                <div className="buttons">
                    <BtnNormal 
                        text ="Sim"
                        width="6rem"
                        backColor ="red"
                        event ={event1}
                    />
                    <BtnNormal 
                        text ="Não"
                        width="6rem"
                        backColor ={colors.green1}
                        event ={event2}
                    />
                </div>
            </Div>
        </Content>
    </MotherModal>
  )
}
