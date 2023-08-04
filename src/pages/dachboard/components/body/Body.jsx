import {Div} from "./styled"
import { ColorContext } from "../../../../contexts/export.js"
import { Outlet } from "react-router-dom";

import {useContext} from "react";

export const Body = ({showed ,children }) => {

  const {colors} = useContext(ColorContext);
  return (
    <Div  showed ={showed} colors = { colors }>
      <Outlet />
    </Div>
  )
}
