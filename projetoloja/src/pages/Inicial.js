import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader/SubHeader";
import Categorias from "../components/Header/Categorias/Categorias";
import Produto from '../components/Produto/Produto';
//import Carrinho from '../components/Carrinho/Carrinho';
//import Cadastrar from '../components/Cadastrar/Cadastrar';
export default Inicial

function Inicial(){
    return(
       <div>
         <Header/>
         <SubHeader/>
         <Categorias/>
         <Produto/>
        </div>
    )
}