import {useContext,useState } from 'react'
import {useNavigate } from 'react-router-dom'
import {FaTrashAlt ,FaHome, FaBan} from 'react-icons/fa'
import {Div} from './style'
import { ColorContext,UserContext } from '../../../contexts/export.js'
import {log } from '../../../images/exportImages.js'
import {BtnNormal } from '../../../components/export.js'
import {Header } from '../buyNow/header/Header'
import {Warn } from '../../../components/modals/export.js'

export const Endereco = () => {
    document.title = "Endereço atual"

    const { colors , } = useContext(ColorContext);
    const { user , } = useContext(UserContext);
    const [ address , setAddress ] = useState({ name : user.userdate.name ,address:"" , reference:"" ,nif:"" })
    const [ showModal , setShowModal ] = useState({warn : false})
    const [check , setCheck ] = useState({firstChecked : false , secondChecked : true } )
    const navigator = useNavigate();

    function handleNextPage(e){
        e.preventDefault()
        if( validateFields( [address.name , address.address, address.reference , address.nif ] ) ) {
            navigator("/payNow")
        } else {
            setShowModal({...showModal , warn:true});

            setTimeout(() => {
                setShowModal({...showModal , warn:false});
            }, 2000);
        }    
    }

    function handlePreviousPage(e){
        e.preventDefault();
        navigator("/buy");
    }

    function handleCheck( e ){
        switch (e ) {
            case 0:
                setCheck({...check , firstChecked :true , secondChecked:false })
                break;
        
            case 1: 
                setCheck({...check , firstChecked :false , secondChecked:true })
                break;
        }
    }

    return (
        <>
            <Div colors = {colors } active1 ={check.firstChecked } active2 ={ check.secondChecked } >
                <Header title="O teu Endereços Actual e Entrega" />

                <div className="container">
                    <div>
                        <p>Para adicionar um novo endereço , por favor preencha o formulário abaixo</p>   
                        <form action="submit">
                            <div>
                                <label htmlFor="name">Nome</label>
                                <input type="text" name="name" id="name"  
                                    onChange = { ( e ) => setAddress( {...address , name:e.target.value} ) }
                                    value ={address.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="addresss">Endereço actual</label>
                                <input type="text" name="address" id="address"  
                                    onChange = { ( e ) => setAddress( {...address ,address :e.target.value} ) }
                                    value ={address.address}
                                />
                            </div>
                            <div>
                                <label htmlFor="ponto">Ponto de Referência</label>
                                <input type="text" name="ponto" id="ponto"  
                                    onChange = { ( e ) => setAddress( {...address ,reference :e.target.value} ) }
                                    value ={address.reference}
                                />
                            </div>
                            <div>
                                <label htmlFor="nif">Número de Contribuente / B.I</label>
                                <input type="text" name="nif" id="nif" 
                                    onChange = { ( e ) => setAddress( {...address , nif:e.target.value} ) }
                                    value ={address.nif}
                                />
                            </div>

                            <div>
                                <BtnNormal 
                                    text ="voltar"
                                    width ="7rem"
                                    backColor ={colors.black}
                                    event ={ handlePreviousPage }
                                />
                                <BtnNormal 
                                    text ="Próximo"
                                    width ="7rem"
                                    backColor ={colors.green1}
                                    event ={ handleNextPage }
                                />
                            </div>
                        </form> 
                    </div>

                    <div>
                        <p>Escolhe uma opção de Entrega</p>

                        <ul>
                            <li onClick = { () => handleCheck( 0 )} >
                                <div>
                                    <label htmlFor=""></label>
                                    <span>
                                        <FaHome />
                                    </span>
                                </div>
                                <div>
                                    <h4>Entrega em Casa / Fazenda</h4>
                                    <p>O tempo para entrega na em casa ou Fazenda , para outra província   no mínimo 24h no máximo 4 dias, Após o pagamento</p>
                                </div>
                            </li>
                            <li onClick = { () => handleCheck( 1 )} >
                                <div>
                                    <label htmlFor=""></label>
                                    <img src={log} alt="logo" />
                                </div>
                                <div>
                                    <h4>Levantar na loja SOLEVO  </h4>
                                    <p>O tempo para levantamento na loja  - 4 dias, Após o pagamento ( localização : Viana) , aberto das 8h00 até 16h00 </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> 
            </Div>

            {showModal.warn && <Warn Icon = { FaBan }  text1 ="Campos vazios" text2="Por favor , preencha todos os campos" /> }

        </>
    )
}



function validateFields( array ){
    const has = array.every(  input  => input.trim() !== "" );

    return has;
}