import{Div} from "./style";
import { useContext , useState  } from 'react'
import {log} from "../../../../images/exportImages.js"
import {BoughtContext } from "../../../../contexts/export.js"
import {BtnNormal } from "../../../../components/export.js";
import {Loading, Allowed } from "../../../../components/modals/export.js"
import QRCode from "react-qr-code";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
const url = 'http://localhost/trabalhoPB/api';


export const Fatura = ( {colors  , setShow,setQuantidade  }) => {
    document.title = "Concluir a comprar"
    const [ link , setLink ] = useState("http://127.0.0.1:5173/payNow/clientes");
    const [precoTotal , setPrecoTotal ] = useState(0);
    const [ codigo , setCodigo ] = useState("");
    const [ codigoFatura , setCodigoFatura ] = useState("");
    const [ modal , setModal ] = useState({ allowed : false , loader :false });
    const { productsBought , setProductsBought  , setCounter } = useContext(BoughtContext);
    const [ userInfo ,setUserInfo ] = useState(productsBought[productsBought.length -1 ])
    const [ userData , setUserData ] = useState([userInfo.nome,userInfo.address ,userInfo.reference,userInfo.nif,userInfo.tipo_entrega,userInfo.tipo_pagamento , getData() ])
    const nomes =["Nome do Cliente : " ,"Morada Atual : ", "Referência : " , "Número de Contribuite : " , "Tipo de Entrega : " , "Tipo de Pagamento : " , "Data da Compra : "];

    var navigator = useNavigate();
    var array = [];

    useEffect( () => {

        for( var i = 0 ; i< productsBought.length -1 ; i++ ){
            array.push( productsBought[i] );
        }

        setPrecoTotal( () => getTotalPrice( array ) );

        setCodigo( () => getCodigo( array ) );

        geradordeCodigoFatura().then( res => {
            setCodigoFatura( () => `SLV${ res.length}` );
        } );

    },[])

    useEffect( () => {
        getQuantidade().then( res => {
            setQuantidade(  () => res );
        })

    } , [])

    function addBuy( ){
        const atualizado = [];

        const datas = {
            valor: precoTotal,
            data_compra: getData() ,
            id_cliente : userInfo.id,
            codigo:codigoFatura,
            codigos_produtos: codigo ,
            tipo_pagamento: userInfo.tipo_pagamento,
            tipo_entrega:userInfo.tipo_entrega
        }

        array.map( prod  => {
            renderizar( prod.id , prod.qnt  ) ;
        }  );
        
        if( adicionarCompra( datas ) ) {
            setModal({...modal , loader : true , allowed:false } );

            setTimeout(() => {
                setModal({...modal , loader : false , allowed : true } );
                
                setTimeout(() => {
                    setModal({...modal , loader : false , allowed : false } );
                    setProductsBought( []);
                    setCounter( () => 0);
                    navigator("/");
                }, 1500);
                
            }, 4000);
        } else {
            alert("Houve uma falha")
        }
    }

    function goBack(){
        setShow(  () => false );
    }

  return (<>
        <Div colors = {colors} >
            <div className="body">
                <div className = "header">
                    <h3>Dados Do Cliente</h3>
                    <ul> {  userData  && userData.map(  ( item , index ) =>  <li key = { index }> { nomes[index] } {item}</li> ) } </ul>
                
                    <div className="contentQRCode">
                        <QRCode 
                            value = { link}
                        />
                    </div>
                </div >
                <div className ="body">
                    <table>
                        <thead>
                            <tr>
                                <td>Nome Produto</td>
                                <td>Quantidade </td>
                                <td>preço Unitário </td>
                                <td>Foto</td>
                            </tr>
                        </thead>
                        <tbody>
                                { productsBought && productsBought.map(  ( item , index ) => {
                                    if( index < productsBought.length -1 ){
                                        return  <tr key = {index} >
                                            <td>{ item.nome }</td>
                                            <td>{ item.qnt }</td>
                                            <td>{ item.preco }</td>
                                            <td> <img src={ item.foto } alt="foto" /></td>
                                        </tr>
                                    }
                                } )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className = "preco">Preço Total  </td>
                                <td className = "preco"> { precoTotal && precoTotal } ,00 Kz</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
            <div className="faturaButtons">
                <BtnNormal 
                    backColor = { colors.black }
                    width = "8rem"
                    text = "Voltar"
                    event = { goBack }
                />

                <BtnNormal 
                    text = "Confirmar a Compra"
                    backColor ={ colors.green1 }
                    width= "10rem"
                    event = { addBuy }
                />
            </div>

        </Div>
        { modal.allowed && <Allowed text = "Compra feita com sucesso!" /> }

        { modal.loader && <Loading />  }
    </>
  )
}

async function adicionarCompra( data ) {
    var added =false;
    try {
        const response = await fetch(`${url}/compras/adicionar`,{
            method: 'POST',
            body :  JSON.stringify(data)
        })

        const res = await response.json();

        added = true;
    } catch (error) {
        console.log(error);
    }

    return added;

}

function getTotalPrice( products  ){
    let price =0;

    console.log(products);
    products.forEach( (product ) => {
        let firstPrice = product.preco;
        price += firstPrice*product.qnt;
        
    })

    return price/2;
}

function getData(){
    var data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    const diaConc = ( dia < 10 ) ? `0${dia}` : dia;
    const mesConc = ( mes < 10 ) ? `0${ mes }`: mes;

    return `${ano}-${mesConc}-${diaConc}`;
}

function getCodigo( prods ){
    var codigoI = "";

    prods.map( ( prod , index ) => {

        if( index < prods.length - 1  )
            codigoI += `${prod.id}-${prod.qnt}-`
        else 
            codigoI += `${prod.id}-${prod.qnt}`

    })

    return codigoI;
}

async function geradordeCodigoFatura( ) {
    var codigo = false;

    try {
        const res = await fetch(`${url}/compras/lista`);

        const response = await res;

         const datas = await response.json()

         codigo = datas["dados"];

    } catch (error) {
        console.log(error);
    }

    return codigo;

}

async function getProduct( id ){

    var data= false;

    try {
        const res = await fetch(`${url}/produtos/lista/${id}`);

        const response = await res.json();

        data = response["dado"];

    } catch (error) {
        console.log(error);
    }

    return data;
} 

async function putProduct( id , data ){

    var updated = false;

    try {
        const res =  await fetch(`${url}/produtos/atualizar/${ id }` ,{
            method : 'PUT',
            body : JSON.stringify(data)
        })

        const response = await res.json();

        console.log(response);

        updated = true;

    } catch (error) {
        console.log(error)
    }

    return updated;
}

function renderizar( id , qnt ){
    var salvos = false;
    getProduct( id ).then( data => { 
        if( data.quantidade > qnt ){
            data.quantidade = data.quantidade - qnt;

            if( putProduct( id , data ) ) {
                salvos = true;
            }
        }
    });

    return salvos;
}

function validar( array ){
    const tem = array.every( item => item === true );

    return tem;
}


async function getQuantidade(){
    var data = false;

    try {
        const res = await fetch(`${url}/compras/lista`);
        const response = await res.json();

        data =  response["dados"].length ;
    } catch (error) {
        console.log(error);
    }

    return data;
}