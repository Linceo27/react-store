import React from "react";
import './Categorias.css'
import { Link } from "react-router-dom";
import Produto from '../../Produto/Produto'
export default Categorias

function Categorias(){
    return(
        <div className="container-categorias">
                <Link id='c1' to ="/Artesanato"><button id='bc1'>Artesanato</button></Link>
                <Link id='c2' to ="/Calcados"><button id='bc2' >Calçados</button></Link>
                <Link id='c3' to ="/Cozinha"><button id='bc3' >Cozinha</button></Link>
                <Link id='c4' to ="/Roupas"><button id='bc4' >Roupas</button></Link>
            </div>

    )
}