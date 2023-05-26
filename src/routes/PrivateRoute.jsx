import {useState,useContext } from 'react'
import { Outlet } from 'react-router-dom'
import {MotherModal,Alert } from '../components/modals/export.js'
import { UserContext } from '../contexts/export.js'
export function PrivateRoutes() {


  const { user ,} = useContext( UserContext );
  
  return (
    <div>
        { user.logged ? <Outlet /> : ( <MotherModal> <Alert/> </MotherModal>)}
    </div>
  )
}
