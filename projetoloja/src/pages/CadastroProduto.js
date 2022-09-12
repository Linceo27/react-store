import React from "react";
import { Link } from "react-router-dom";
import Produto from "../components/Produto/Produto";
import Cadastrar from "../components/Cadastrar/Cadastrar"
export default CadastroProduto

function CadastroProduto(){
    return(
        <div>
            <h1> Cadastrar</h1>
        <Link to ="/Inicial">
    <button>Voltar para o Feed</button>
        </Link>
        <Cadastrar/>
        <Produto/>

           </div>
    )
}