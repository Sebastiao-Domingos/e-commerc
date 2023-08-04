import {useState} from 'react'
import { Bar ,Line , Pie} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

export function BarChart( {datas ,colors}) {
    
    const [userData , setUserData ] = useState({
        labels : datas.map(  ( data ) => data.nome ) ,
        datasets: [
            { 
                label : "Quantidade dos Produtos",
                data : datas.map( data => data.quantidade ),
                backgroundColor :[
                    colors.green1, colors.violet, '#EEab12', colors.blue
                ],
                borderColor:'white',
                borderWidth : 2,
                color:'white',
            }
        ]
    });

  return <Bar
        data = {userData }
        width ={1400}
        height = {600}
        options = {
            {
                maintainAspectRadio:false,
                legend : {
                    labels : {
                        fontSize:23,
                    },
                }
            }
        }
        /> 
}
export function CircleChart( {datas ,colors}) {
    
    const [userData , setUserData ] = useState({
        labels : datas.map(  ( data ) => data.nome ) ,
        datasets: [
            { 
                label : "Quantidade dos Produtos",
                data : datas.map( data => data.quantidade ),
                backgroundColor :[
                    colors.green1, '#cccc', '#EEab12', colors.blue, colors.violet
                ],
                borderColor:colors.black,
                borderWidth : 2,
            }
        ]
    });

  return <Pie
        data = {userData }
        width ={1400}
        height = {600}
        options = {
            {
                maintainAspectRadio:false,
                legend : {
                    labels : {
                        fontSize:23,
                    },
                }
            }
        }
        /> 
}
export function LineChart( {datas ,colors}) {
    
    const [userData , setUserData ] = useState({
        labels : datas.map(  ( data ) => data.nome ) ,
        datasets: [
            { 
                label : "Quantidade dos Produtos",
                data : datas.map( data => data.quantidade ),
                backgroundColor :'#fefefe ',
                borderColor:colors.green1,
                borderWidth : 1,
            }
        ]
    });

  return <Line
        data = {userData }
        width ={1400}
        height = {600}
        options = {
            {
                maintainAspectRadio:false,
                legend : {
                    labels : {
                        fontSize:23,
                    },
                }
            }
        }
        /> 
}


