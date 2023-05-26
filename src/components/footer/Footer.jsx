import { Div} from './style'
import { log} from '../../images/exportImages.js'
import {FaFacebook,FaPhone } from 'react-icons/fa'
import {ColorContext } from '.././../contexts/ColorProvider'
import {useContext } from 'react'
import { Link} from 'react-router-dom'
export const Footer = () => {
    
    const { colors , } = useContext(ColorContext);
    return (
    <Div logo ={log} colors ={colors}>
        <div className="seguir">
            <p>Siga-nos a partir do nosso <a href="www.facebook.com">facebook  <FaFacebook /></a></p>
        </div>
        <div className="contentFooter">
            <div className="logo">
                <img src={log} alt="logotipo" />
                <p>A Empresa SOLEVO é uma empresa de venda de produtos voltada para a área da agricultura, esta localizada em Luanda no município de viana. Comercializa vários tipos de produtos tais como: fertilizantes, adubos, máquinas e muito mais...</p>
            </div>
            <div className="text">
                <div className="first">
                    <h3>Definições</h3>
                    <ul>
                        <li>
                            <Link to ="/">Loja</Link>
                        </li>
                        <li>
                            <Link to ="/">Acção Social</Link>
                        </li>
                        <li>
                            <Link to ="/">Minhas Compras</Link>
                        </li>
                        <li>
                            <Link to ="/">Meu Perfil</Link>
                        </li>
                        <li>Temas</li>
                    </ul>
                </div>
                <div className="second">
                    <h3>Localização</h3>
                    <ul>
                        <li>País : Angola</li>
                        <li>Província : Luanda</li>
                        <li>Município : Viana</li>
                        <li>Distrito : Luanda-Sul</li>
                        <li>Nº Tel : +244 928 572 013 <FaPhone /> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="last">
            <p>Todos os direitos reservados</p>
        </div>
    </Div>
  )
}
