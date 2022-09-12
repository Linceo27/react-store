//import { useState } from 'react'
import './Carrinho.css'
import React from 'react'
export default Carrinho


function Carrinho({valor}){
valor = 0    
    function AdicionarCarrinho(){
     valor = valor +1
    }
    
    function RemoverCarrinho({valor}){
        if(valor > 0){
            valor = valor -1
        }else{
            alert('O carrinho já está vazio')
        }
    }
       
        return(
        <div className='container-carrinho'> 
            <button id = 'botao-adicionar' onClick = {AdicionarCarrinho}> Adicionar ao Carrinho</button>
            <button  id = 'botao-remover'onClick = {RemoverCarrinho}> Remover do Carrinho</button>
        </div>
        )
    
    }