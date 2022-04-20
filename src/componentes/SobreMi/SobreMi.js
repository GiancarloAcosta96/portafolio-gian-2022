import React from "react";
import { ContenedorPrincipal, ContenedorSobreMi, Texto, Descripcion, Imagen, Botones, Skills } from "./SobreMiElements";
import foto from "../SobreMi/perfil.jpg";
import html from "../SobreMi/html.svg";
import css from "../SobreMi/css3.svg";
import sass from "../SobreMi/sass.svg";
import bootstrap from "../SobreMi/bootstrap.svg";
import tailwind from "../SobreMi/tailwindcss.svg";
import javascript from "../SobreMi/javascript.svg";
import react from "../SobreMi/react.svg";
import php from "../SobreMi/php.svg";
import git from "../SobreMi/git.svg";
import adobexd from "../SobreMi/adobexd.svg";
import figma from "../SobreMi/figma.svg";
import trello from "../SobreMi/trello.svg";


export default function SobreMi(){
    return (
        <ContenedorPrincipal>
            <ContenedorSobreMi>
                <Descripcion>
                    <Texto>
                        <h2>Sobre mi</h2>
                        <p>Egresado de la carrera de Ingeniería de
                        software en ISIL.
                        Fascinado por la programación web y
                        desarrollo Front-end, me encuentro en la
                        búsqueda de adquirir mucho más experiencia
                        en este campo.
                        También cuento con experiencia en gestión de
                        proyectos y metodologías ágiles.
                        </p>
                    </Texto>
                    
                    <Botones>
                        <ul>
                            <li className="sobreMi" href="#">Descarga mi Curriculum</li>
                            <li className="contacto" href="#">Contáctate conmigo</li>
                        </ul>
                    </Botones> 
                </Descripcion>

                <Imagen>
                    <img src={foto} alt="" />
                </Imagen>
            </ContenedorSobreMi>
        </ContenedorPrincipal>
    )
}