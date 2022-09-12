import React from "react";
//import { Link } from "react-router-dom";
//import Produto from "../Poduto/Produto";
import './Cadastrar.css'
export default Cadastrar 

function Cadastrar(props){

 function cadastroProdutos(event){
    event.preventDefault()

 }

 return(
    <div className="container-cadastro">
        <form onSubmit={cadastroProdutos}>
           
            <div>
            <label htmlFor = "nome">NOME:</label>
            <input placeholder="Digite o nome do Produto" type="text"/>

            <label htmlFor = "nome">VALOR:</label>
            <input  placeholder="Digite o valor do Produto" type="number"/>

            <label htmlFor = "nome">ID:</label>
            <input placeholder="Digite o Id do Produto" type="text"/>

            <label htmlFor = "nome">LINK IMG:</label>
            <input  placeholder="Digite o link da imagem do Produto" type="text"/>

            </div>
            <div>
            <input placeholder="Cadastrar" type="submit"/>
            </div>

        </form>
    </div>
 )
}