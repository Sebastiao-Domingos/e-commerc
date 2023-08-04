import {Div } from  "./styled"
import {ColorContext} from "../../../../../contexts/export.js"
import { log } from "../../../../../images/exportImages.js"
import {useContext , useState} from 'react'
import {FaSearch , FaBars , FaUserAlt} from "react-icons/fa"
import {Link , useNavigate } from 'react-router-dom';
export const MenuH = ( {setShowed} ) => {

  const { colors , } = useContext(ColorContext);
  

  return (
    <Div  colors = {colors} >
      <div className="container">
          <div className="dashMenu">
            <img src={log} alt="logo da empresa" />
            <button onClick = { () => setShowed( current => !current )  } ><FaBars /></button>
            <h2>DashBoard</h2>
          </div>
          <div className="content">
            <div className="search">
              <input type="text" name="searchAdm"  placeholder = "Pesquina por nome" />
              <FaSearch />
            </div>

            <div className = "user">
              <button><FaUserAlt /> Adm <div>.</div></button>
              <ul>
                  <li>
                    <Link to ="">Set</Link>
                  </li>
                  <li>
                    <Link to ="">Notificações</Link>
                  </li>
                  <li>
                    <Link to ="">Mensagens</Link>
                  </li>
                  <li>
                    <Link to ="/">Sair</Link>
                  </li>
              </ul>
            </div>
          </div>

      </div>
    </Div>
  )
}
