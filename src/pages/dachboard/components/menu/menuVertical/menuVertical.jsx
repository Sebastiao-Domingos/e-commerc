import {Div} from "./styled"
import {ColorContext } from "../../../../../contexts/export.js"
import {useContext , useReducer ,useEffect} from "react"
import { Link } from "react-router-dom"
import {FaEdit , FaEye ,FaBook } from "react-icons/fa"
import { Option } from "./item/Option"

export function MenuVertical({ showed }) {


  function reducer(  state,action ){
      switch (action) {
        case 0:
          return   {...state , 
            cAdubo : true , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 1:
          return   {...state , 
            cAdubo : false , cFertilizante : true, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 2:
          return   {...state , 
            cAdubo : false, cFertilizante : false, cMaquina:true, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 3:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:true, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 4:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : true ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 5:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : true , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 6:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : true , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 7:
          return   {...state , 
            cAdubo : false, cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:true , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 8:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:true , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 9:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:true ,
            sobreSolevo: false , accaoSocial : false 
          };
        case 10:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: false , accaoSocial : true
          };
        case 11:
          return   {...state , 
            cAdubo : false , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
            vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
            sobreSolevo: true , accaoSocial : false 
          };
        default:
          return  state;
      }
  }

  const [state, dispatch] = useReducer( reducer , 
    { 
      cAdubo : true , cFertilizante : false, cMaquina:false, cSemente:false, cCliente : false ,
      vAdubo : false , vSemente:false , vMaquina:false , vFertilizante : false , vCliente:false ,
      sobreSolevo: false , accaoSocial : false 
    } );


  
   const {colors , } = useContext(ColorContext);
  
  return (
    <Div colors = {colors} showed =  {showed} >
      <div className="content1">
        <h3><span><FaEdit /></span> Cadastrar </h3>
        <ul>
          <Option  event= { () => dispatch(0) } actived = { state.cAdubo }>
            <Link to = "/dashBoard/c_adubo">Adubo</Link>
          </Option>
          <Option  event= { () => dispatch(1) } actived = { state.cFertilizante }>
            <Link to = "/dashBoard/c_fertilizante">Fertilizante</Link>
          </Option>
          <Option  event= { () => dispatch(2) } actived = { state.cMaquina }>
            <Link to = "/dashBoard/c_maquina">Máquina</Link>
          </Option>
          <Option  event= { () => dispatch(3) } actived = { state.cSemente }>
            <Link to = "/dashBoard/c_semente">Semente</Link>
          </Option>
          <Option  event= { () => dispatch(4) } actived = { state.cCliente }>
            <Link to = "/dashBoard/cadastrarCliente">Cliente</Link>
          </Option>
        </ul>
      </div>
      <div className="content2">
        <h3><span><FaEye /></span> Quero Ver </h3>

        <ul>
          <Option  event= { () => dispatch(5) } actived = { state.vAdubo}>
            <Link to = "/dashBoard/verProduto/adubo">Adubo</Link>
          </Option>
          <Option  event= { () => dispatch(6) } actived = { state.vFertilizante}>
            <Link to = "/dashBoard/verProduto/fertilizante">Fertilizante</Link>
          </Option>
          <Option  event= { () => dispatch(7) } actived = { state.vMaquina }>
            <Link to = "/dashBoard/verProduto/maquina">Máquina</Link>
          </Option>
          <Option  event= { () => dispatch(8) } actived = { state.vSemente }>
            <Link to = "/dashBoard/verProduto/semente">Semente</Link>
          </Option>
          <Option  event= { () => dispatch(9) } actived = { state.vCliente}>
            <Link to = "/dashBoard/verCliente">Cliente</Link>
          </Option>
        </ul>
      </div>
      {/* <div className="content3">
        <h3><span><FaBook /></span> Editar Informações </h3>

        <ul>
          <Option  event= { () => dispatch(10) } actived = { state.accaoSocial}>
            <Link to = "/dashBoard">Acção Social</Link>
          </Option>
          <Option  event= { () => dispatch(11) } actived = { state.sobreSolevo }>
            <Link to = "/dashBoard">Sobre SOLEVO</Link>
          </Option>
        </ul>
      </div> */}
    </Div>
  )
}
