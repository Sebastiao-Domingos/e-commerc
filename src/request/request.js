var url: "http://localhost/trabalhoPB/api"


export async function get( type  , id ){

    if( id === null ){
        const response = await fetch(`${url}/${type}`);

        const data = await response.json();

        return data;
    } else {
        const response = await fetch(`${url}/${type}/${id}`)

        const data = await response.json();

        return data;
    }
} 