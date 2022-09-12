import '../Header/Header.css'
import React from 'react';
import logoGit from "../../components/imagens/logoGIT.png"

export default Header 
function Header (){
return(
      <div className = 'container-header'>
        <header>
            <h1> TIPICAMENTE PERNAMBUCANA</h1>
            <a  href = 'https://github.com/Linceo27'> <img className = 'git' src = {logoGit} alt = ''/></a>
        </header>
    </div>
)

}