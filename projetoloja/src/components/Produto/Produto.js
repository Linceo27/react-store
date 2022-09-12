import './Produto.css'
import React from 'react'
import Carrinho from '../Carrinho/Carrinho'
import mulheres from "../../components/imagens/mulheres.png"
import trio from "../../components/imagens/trio.png"
import gangaceiros from "../../components/imagens/gangaceiros.png"
import Cadastrar from '../Cadastrar/Cadastrar'
export default Produto

function Produto(){
    return(
        <div  className='container-geral' >

           <div className='container-produto'> 
                <img className = 'imagem-1' src = {mulheres} alt = 'artesanato, representação de um trio de forró'/>
                <img className = 'imagem-2' src = {trio} alt = 'artesanato, representação de um trio de forró'/>
                <img className = 'imagem-3' src = {gangaceiros} alt = 'artesanato, representação de um trio de forró'/>
            </div>
         <div  className='container-carrinho-botoes'>
            <Carrinho/>
            <Carrinho/>
            <Carrinho/>
         </div>


      </div>
    )
}