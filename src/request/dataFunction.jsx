import axios from 'axios'
import {useState } from 'react'
const url = 'http://localhost/trabalhoPB/api';

export function get( type , id ){
    let users = false;

    if( id !== null ){
        axios.get(`${url}/${ type}/lista`)
        .then( res =>  users = res.dadta['dados'])
        .catch( err => console.log("erro na aquisicao de dados") );

    } else {
        axios.get(`${url}/${type}/lista/${id}`)
        .then( res =>  users = res.dadta['dados'])
        .catch( err => console.log("erro na aquisicao de dados") );
    }
    
    return users;
}


export function add( type ,  newData ) {
    let added = false;
    
    axios.post(`${url}/${type}/adicionar` , JSON.stringify(newData) )
    .then( () => added = true)
    .catch( err => console.log( err ) );

    return added;
}


export function deleteItem( type ,id){
    let deleted  = false;

    axios.delete(`${url}/${type}/eliminar/${id}`)
    .then( () =>  deleted = true  )
    .catch( err => console.log(err));

    return deleted;
}

export function update( newData,type ,id){
    let updated  = false;

    axios.put(`${url}/${type}/atualizar/${id}` , newData )
    .then( () =>  updated = true  )
    .catch( err => console.log(err));

    return updated;
}