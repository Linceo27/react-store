import React from "react";
import Filho from "./Filho";
import { useState } from 'react'

export default function Pai() {
    const [contador, setContador] = useState(0)

    function AdicionarCarrinho(){
        setContador(contador++)
            }
            
    function RemoverCarrinho(){
        if(contador > 0){
                setContador(contador--)
        }else{
            alert('O carrinho já está vazio')
        }
            }
    return (
      <div>
        <button id = 'botao-adicionar' onClick = {AdicionarCarrinho}> Adicionar ao Carrinho</button>
        <button  id = 'botao-remover'onClick = {RemoverCarrinho}> Remover do Carrinho</button>

        <Filho AdicionarCarrinho = {contador} RemoverCarrinho = {contador} />
      </div>
    )
  }