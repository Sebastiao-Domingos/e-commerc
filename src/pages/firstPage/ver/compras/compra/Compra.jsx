import {Div} from "./style";
import {useParams,useNavigate } from "react-router-dom";
import {useState , useEffect, useContext } from 'react'
import { Loading } from "../../../../../components/modals/export.js"
import {UserContext , ColorContext } from "../../../../../contexts/export.js"
import {FaTimes } from "react-icons/fa";
const url = 'http://localhost/trabalhoPB/api';

export function Compra() {
    const { user ,} = useContext(UserContext);
    const {colors, } = useContext(ColorContext);
    const [compra , setCompra ] = useState("");
    const [produtos , setProdutos ] =useState("");
    const [ chaves  , setChaves ] = useState([]);

    const { id } = useParams();  
    const navigator = useNavigate();
    var arrayProd = [];

    useEffect( () => {

        getCompra( id ).then( res => {
            setCompra( () => res );

            const prods = getIdQtnProdutos(res.codigos_produtos);
            setChaves(() => prods);
                        
        })

        getProdutos().then(resp => {
            const prods = resp["dados"];

            const novos = prods.filter( prod => {
                const element = chaves.some( item => item.id === prod.id );

                if( element ) return prod;
                else return;
                
            })

            setProdutos(() => novos);
        })
        
    } , [])



    useEffect( () => {
        if( chaves )
            getProdutos().then(resp => {
                const prods = resp["dados"];

                const novos = prods.filter( prod => {
                    const element = chaves.some( item => item.id === prod.id );

                    if( element ) return prod;
                    else return;
                    
                })

                setProdutos(() => novos);
            })
        
    } , [chaves])

    return (<>
        { compra !== "" && produtos !== "" ? (
            <Div colors = {colors }>
                <div className="header">
                    <h2>Ver com mais detalhes a compra {compra.codigo }</h2>

                    <div>
                        <p>Nome do Cliente : {user.userdate.nome} </p>
                        <p>Data da Compa : {compra.data_compra }</p>
                        <p>Tipo de Entrega : {compra.tipo_entrega}</p>
                        <p>Tipo de Pagamento : {compra.tipo_pagamento}</p>
                        <p>Preço Total : {compra.valor},00 Kz</p>
                    </div>

                    <button onClick = { () => navigator("/compras") }><FaTimes /></button>
   
                </div>
                <div className="body">
                    <h3>Produtos Comprados </h3>

                    <table>
                        <thead>
                            <tr>
                                <td>Foto</td>
                                <td>Nome</td>
                                <td>Código</td>
                                <td>Quantidade</td>
                                <td>Preço Unitário Kz</td>
                            </tr>
                        </thead>
                        <tbody>
                            { produtos.map( (item , index )=> {
                                return <tr key  = {index}>
                                    <td><img src={item.foto} alt="" /></td>
                                    <td>{item.nome}</td>
                                    <td>{item.codigo}</td>
                                    <td>{chaves[index].qnt}</td>
                                    <td>{item.preco},00</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </Div>
        ) : (
            <Loading />
        )}
    
    </>
    )
}


async function getCompra( id ) {
    var data = false;

    try {
        const res =  await fetch(`${url}/compras/listaUm/${id}`)

        const response = await res.json();

        data = response["dado"];

    } catch (error) {
        console.log(error);
    }

    return data;

}

function getIdQtnProdutos( str ){
    var strings = str.split("-");
    var prods = [];

    for (let index = 0; index < strings.length - 1 ; index+=2 ) {
        const element = {
            id : Number(strings[index]),
            qnt : Number(strings[index+1])
        }

        prods.push(element );
        
    }

    return prods;
}

async function getProdutos( ){
    var data = false;

    try {
        const res =await fetch(`${url}/produtos/lista`)

        const response = await res.json();

        data = response;
    } catch (error) {
        console.log(error);
    }

    return data;
}