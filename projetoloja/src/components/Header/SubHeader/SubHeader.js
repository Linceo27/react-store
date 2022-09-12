import './SubHeader.css'
import React from 'react';
import { Link } from "react-router-dom";
//import valor from '../Carrinho/valor';

//import LUPA from '../../imagens/LUPA.png'

export default SubHeader

function SubHeader (){
function BuscarProva(evento){
    evento.preventDefault()
    console.log('Buscou')
    }
    return(
        <div className = 'container-subheader'>
                <div className = 'button-subheader'>
                    <button id = 'b1'>Lista de Desejos</button>
                    <button id = 'b2'>Meu Carrinho </button>
                    <button id = 'b3'>Entrar/Cadastrar</button>
                    <Link id='b4' to ="/CadastroProduto"><button id='b45' >Cadastro de Produto</button></Link>
                </div>
            <form onSubmit={BuscarProva} className = 'form-subheader'>
                <input id = 'busca-input' type = 'text' placeholder = 'O que você está procurando?'/>
                <input id='busca-botao' type = 'submit' value = 'Buscar'/>
            </form>
        </div>

    )
}