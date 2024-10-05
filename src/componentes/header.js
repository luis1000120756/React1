//vamos hacer un importacion de componentes
import React from "react";
import './header.css'
//Crear un componente
function Header(){
    return(
        <header className='col s12'>
            <div className='encabezado'>
                <h1 className='header-center'>
                    Panadería Luchin
                </h1>
            </div>
        </header>
    )
}

//Enviar componente a los demás archivos
export default Header;