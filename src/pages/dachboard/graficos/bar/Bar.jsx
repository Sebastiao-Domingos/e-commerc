import {Div} from "./style"
import { ColorContext } from "../../../../contexts/ColorProvider"
import {useContext ,useState} from "react"
import { Chart as ChartJS } from  "chart.js/auto"
import {BarChart , LineChart , CircleChart } from "../compGraphic/BarChart"



export function GraphicBar({ datas  ,type}) {
    const { colors } = useContext( ColorContext );
    

    function Graphic( type  ) {
        switch ( type ) {
            case  "Bar":
                return <BarChart datas = { datas} colors = {colors} />;
            case  "Linhas":
                return <LineChart datas = { datas} colors = {colors}  />;
            case  "Circulo":
                return <CircleChart datas = { datas} colors = {colors}  />;
        }
    }
    return (
    <Div colors = { colors } type = {type}>
        { (datas &&  Graphic( type ) )}
    </Div>
  )
}

