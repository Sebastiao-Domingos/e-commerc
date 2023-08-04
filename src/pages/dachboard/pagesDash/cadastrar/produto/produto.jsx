import {Div}  from "./style"
import {ColorContext} from "../../../../../contexts/export.js"
import {useContext , useState , useEffect , useRef} from "react";
import { FaCamera } from "react-icons/fa"
import { Loading , Warn, Allowed } from "../../../../../components/modals/export.js"
const url = 'http://localhost/trabalhoPB/api';
import {FaUserAltSlash } from 'react-icons/fa'


export function Produto( {titulo , type}) {
    const {colors} = useContext(ColorContext);
    const [url ,setUrl ] = useState(null);
    const fotoRef = useRef();
    const [showModal ,setShowModal ] = useState({ loader :false , warn : false ,allowed : false , warn1 : false});
    const [newProduct , setNewProduct  ] = useState({ 
        name : "" ,codigo : type , price : ""  ,data_fab : "" , 
        data_val : "" ,fabricante : "", precaussao1 : "",
        precaussao2: "",precaussao3:"" ,precaussao4:"" ,info : "",foto : "" , quantidade : 0,
    });

    useEffect( () => {
        pegarCodigo()
    } ,[])
    
    function pegarCodigo(){
        get( tipoProduto( type ) ).then(  res => {
            const code = `${type}00${res["dados"].length + 1}`
            setNewProduct( {...newProduct , codigo: code })
        })
    }
 
    function handleSubmit ( e ){
        e.preventDefault();
        const image =  fotoRef.current;

        if( validation( newProduct ) ) {
            
            setShowModal( { ...showModal , loader : true , warn : false, Allowed:false });

            const reader = new FileReader();

            reader.onload = function(){
                var photo = reader.result;
                setUrl( () => photo );


                const newData = {
                    nome :newProduct.name,
                    foto :photo,
                    preco: newProduct.price,
                    codigo: newProduct.codigo,
                    tipo: tipoProduto( type  ),
                    data_fabrico:newProduct.data_fab,
                    data_validade: newProduct.data_val,
                    info: newProduct.info,
                    precaussoes: precaussoes( [newProduct.precaussao1,newProduct.precaussao2,newProduct.precaussao3,newProduct.precaussao4 ]),
                    fabricante: newProduct.fabricante,
                    ativado:1,
                    stars:3,
                    quantidade:newProduct.quantidade,
                }


                addProduct(  newData ).then( res => {

                    if( res["dado"] === 'Inseridos com sucesso!'){

                        setShowModal( { ...showModal , loader : false , warn : false, allowed:true ,warn1 : false});

                        setTimeout(() => {
                            setShowModal( { ...showModal , loader : false , warn : false, allowed:false ,warn1 : false});
                        }, 4000);
                            
                        setNewProduct({...newProduct , name : "" ,codigo : type , price : ""  ,data_fab : "" , 
                            data_val : "" ,fabricante : "", precaussao1 : "",
                            precaussao2: "",precaussao3:"" ,precaussao4:"" ,info : "",foto : "" , quantidade : 0,
                        });

                    }else{
                        setShowModal( { ...showModal , loader : false , warn : true, allowed:false ,warn1 : false});

                        setTimeout(() => {
                            setShowModal( { ...showModal , loader : false , warn : false, allowed:false ,warn1 : false});
                        }, 4000);

                    }
                })
                
            } 
            reader.readAsDataURL(image.files[0]);

        } else {
            setShowModal( { ...showModal , loader : false , warn : false, allowed:false ,warn1 : true});

            setTimeout(() => {
                setShowModal( { ...showModal , loader : false , warn : false, allowed:false ,warn1 : false});
            }, 4000);
        }
        
    }
    

    return (<>
            <Div colors = {colors}>
                <div className="header">
                    <h2>Cadastar {titulo}</h2>
                </div>
                <div className="body">
                    <form onSubmit = { handleSubmit }>
                        <div className = "first">
                            <div>
                                <label htmlFor="nome">Nome do Produto</label>
                                <input type="text" name="nome  " className ="input1" id="nome" placeholder = "Nome" 
                                    value = { newProduct.name}
                                    onChange ={ e  => setNewProduct( {...newProduct , name : e.target.value }) }
                                />
                            </div>
                            <div>
                                <label htmlFor="codigo">Código do Produto</label>
                                <input type="text" name="codigo" className ="input2" id="codigo" placeholder = "Código" 
                                    value = { newProduct.codigo }
                                    onChange ={ e  => setNewProduct( {...newProduct , codigo: e.target.value }) }
                                />
                            </div>
                            <div>
                                <label htmlFor="preco">Preço Unitário do Produto</label>
                                <input type="text" name="preco" className ="input1"  id="preco" placeholder = "Preço" 
                                    value = { newProduct.price}
                                    onChange ={ e  => setNewProduct( {...newProduct , price : e.target.value }) }
                                />
                            </div>
                            <div>
                                <label htmlFor="data_fab">Data de fabricação do Produto</label>
                                <input type="date" name="data_fab" className ="input2"  id="data_fab" placeholder = "Data de fabricação" 
                                    value = { newProduct.data_fab}
                                    onChange ={ e  => setNewProduct( {...newProduct ,data_fab : e.target.value }) }
                                />
                            </div>
                            <div>
                                <label htmlFor="data_val">Data de Validade do Produto</label>
                                <input type="date" name="data_val  " className ="input2"  id="data_val" placeholder = "Data de Validade" 
                                    value = { newProduct.data_val}
                                    onChange ={ e  => setNewProduct( {...newProduct , data_val: e.target.value }) }
                                />
                            </div>
                            <div>
                                <label htmlFor="fabricante">Nome do Fabricante</label>
                                <input type="text" name="fabricante" className ="input1"  id="fabricante" placeholder = "Nome do Fabricante" 
                                    value = { newProduct.fabricante}
                                    onChange ={ e  => setNewProduct( {...newProduct ,fabricante : e.target.value }) }
                                />
                            </div>
                        </div>
                        <div className = "div_foto">
                            <div>
                                <label htmlFor="data_val">Quantidade de Produto</label>
                                <input type="number" name="quantidade" className ="quantidade"  id="quantidade" placeholder = "Quantidade de Produto" 
                                    value = { newProduct.quantidade}
                                    onChange ={ e  => setNewProduct( {...newProduct , quantidade: e.target.value }) }
                                    />
                            </div>
                            <div>
                                <label htmlFor="foto">Seleciona a Foto do Produto</label>
                                <input type="file" name="foto" id="foto"  placeholder = "Foto do produto"
                                    ref = {fotoRef}
                                    value ={newProduct.foto}
                                    onChange = { e => setNewProduct( {...newProduct , foto : e.target.value })}
                                />
                                <label htmlFor="foto" id = "camera" ><FaCamera /></label>
                                
                            </div>
                            
                        </div>

                        <div className="second">
                            <h4>Precaussões</h4>

                            <div className="precaussoes">
                                <div>
                                    <label htmlFor="primeira">1 ) Precaussão</label>
                                    <input type="text" name = "primeira" id ="primeira"   placeholder = "1 )" 
                                        value = {newProduct.precaussao1}
                                        onChange = {  e  => setNewProduct({...newProduct , precaussao1 : e.target.value } )}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="segunda">2 ) Precaussão</label>
                                    <input type="text" name = "segunda" id = "segunda"   placeholder = "2 )" 
                                        value = {newProduct.precaussao2}
                                        onChange = {  e  => setNewProduct({...newProduct , precaussao2: e.target.value } )}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">3 ) Precaussão</label>
                                    <input type="text" name = "terceira"  id  = "terceira" placeholder = "3 )" 
                                        value = {newProduct.precaussao3}
                                        onChange = {  e  => setNewProduct({...newProduct , precaussao3: e.target.value } )}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="quarta">4 ) Precaussão</label>
                                    <input type="text" name = "quarta"  id = "qaurta" placeholder = "4 )" 
                                        value = {newProduct.precaussao4}
                                        onChange = {  e  => setNewProduct({...newProduct , precaussao4: e.target.value } )}
                                    />
                                </div>
                            </div>

                            <h4>Mais sobre o Produto</h4>
                            <textarea 
                                name="informacao" 
                                id="info" cols="30" 
                                rows="10"   placeholder  = "Escrever mais informarções sobre o producto em causa..."
                                value = {newProduct.info}    
                                onChange = { e => setNewProduct( {...newProduct , info : e.target.value } ) }
                            >  </textarea>
                        </div>

                        <button type="submit">Concluir o Cadastro</button>
                    </form>
                </div>
            </Div>

            { showModal.loader && <Loading />}
            {showModal.warn && <Warn  Icon = {FaUserAltSlash} text1 = "Houve um erro durante o cadastro " text2 = " Verifica os dados"/>}
            {showModal.warn1 && <Warn  Icon = {FaUserAltSlash} text1 = "Tem campos vazios ! " text2 = "Por favor é obrigatório preencher todos os campos!"/>}
            { showModal.allowed && <Allowed  text ="Produto adicionado com sucesso!"/>}
        </>
    )
}

function validation( object ){
    const array = [ object.name , object.price , object.data_fab , object.data_val , object.codigo , object.precaussao1, object.precaussao2 , object.foto , object.quantidade, object.info]


    const has = array.every( ( input ) => {
        return input.trim() !== "";
    })

    return has;
}

function tipoProduto( type ){

    switch (type) {
        case "A":
            return "adubo";
        case 'S':
            return "semente";
        case 'F':
            return "fertilizante";
        case "M":
            return "maquina";
    }
}

function precaussoes( array ){
    var prec = "";

    array.map( (item , index) => {
        if( item !== "") {
            if( index < array.length -1 ) prec +=`${item}|`;
            else prec +=`${item}`
        }
    })

    return prec;
}


async function get( type ){
    var datas =  0;
    try {
        const res = await fetch(`${url}/produtos/lista/${type}`);
        const response = res.json();

        datas = response;
    } catch (error) {
        console.log(error);
    }

    return datas;
}

async function addProduct( data ){
    var datas =  false;
    try {
        const res = await fetch(`${url}/produtos/adicionar` ,{
            method : 'POST',
            body : JSON.stringify( data )
        });
        const response = await res.json();

        datas = response

        console.log( datas);
    } catch (error) {
        console.log(error);
    }

    return datas;
}

