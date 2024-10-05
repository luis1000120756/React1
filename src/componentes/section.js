import React from "react";
import './Section.css';

function Section(){
    return( 
        <div className='row'>
            <section className='col s12'>
                <h2 className='header center'>
                    Deleita tu paladar con nuestros productos
                </h2>
                <div className='col s12 m5'>
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://img.freepik.com/free-photo/jack-o-lantern-cookie-treats_23-2147679591.jpg?t=st=1728168528~exp=1728172128~hmac=ddcb8000ba72882715cc3b81d04d93b5a4139c0c5cf320ddbd59bc200a72946a&w=996" alt="galletas halloween" />
                            <span class="card-title" id="titulo-caja">Kreken galletas</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red pulse" id="boton"><i class="material-icons">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                            <p><b>$ 1500</b></p>
                            <p>Deliciosas galletas que te harán gritar d ela emoción</p>
                            </div>
                            <div class="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </div>
    )
}
export default Section;