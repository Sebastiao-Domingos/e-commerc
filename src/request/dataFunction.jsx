import axios from 'axios'
import {useState } from 'react'
export function getUsers(){
    let users;

    axios.get("http://localhost:3030/users")
    .then( res =>  users = res)
    .catch( err => console.log("erro na aquisicao de dados") );
    

    return users;
}

export function getUser( id ) {
    const [user , setUser ] = useState();

    axios.get("http://localhoste:30303/users/"+{id})
    .then( res => setUser( res) )
    .catch( err => console.log( err ) );

    return user;
}

export function addUser( newUser ) {
    
    return axios.post("http://localhost:3030/users" , newUser )
    .then( () => added = true)
    .catch( err => console.log( err ) );
}


export function deleteUser(id){
    const [deleted , setDeleted ] = useState(false);

    axios.delete("http://localhost:3030/users/"+{id})
    .then( () => setDeleted( true ))
    .catch( err => console.log(err));

    return deleted;
}