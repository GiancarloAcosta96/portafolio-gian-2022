import React from "react";
import { Arte, ContenedorPrincipal, CuerpoContenedor, Descripcion } from "./CuerpoElements";
import roma from '../Cuerpo/roma2.svg';

export default function Cuerpo() {
    return (
        <ContenedorPrincipal>
            {/* <Circulo></Circulo> */}
            <CuerpoContenedor>
                <Descripcion>
                    <h1>Hola, soy Giancarlo.</h1>
                    <p>Soy un desarrollador web apasionado por el Frontend establecido en Perú.</p>
                    <a className="works" href="https://github.com/GiancarloAcosta96">Mira mis trabajos →</a>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/gianchungaacosta/">LinkedIn</a></li>
                        <li>•</li>
                        <li><a href="https://github.com/GiancarloAcosta96">Github</a></li>
                        <li>•</li>
                        <li><a href="https://twitter.com/Aerosmith2211">Twitter</a></li>
                    </ul>
                </Descripcion>
                <Arte>
                    <img src={roma} alt="developer" />
                </Arte>
                <h2>SCROLL DOWN →</h2>
            </CuerpoContenedor>
        </ContenedorPrincipal>
    )
}   