import React from "react";

//Crear componente 
function Nav(){
    return(
        <div className="row">
            <nav>
                <div class="nav-wrapper teal">
                <a href="#" class="brand-logo">Luis</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Inicio</a></li>
                    <li><a href="badges.html">Tienda</a></li>
                    <li><a href="collapsible.html">Facturacion</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;