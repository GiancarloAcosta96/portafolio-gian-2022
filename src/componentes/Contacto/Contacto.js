import React from "react";
import { Contenedor, ContenedorContacto, RedesLi, ContenedorTexto } from "./ContactoElements";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contacto() {
    return(
        <ContenedorContacto>
            <Contenedor>
                <h2>Contáctame</h2>
                <ContenedorTexto>
                <p>A través de mis redes sociales</p>
                </ContenedorTexto>
                
                    <RedesLi>
                        <a className="facebook" href="https://www.facebook.com/gianacosta221196"><FaFacebookF/></a>
                        <a className="instagram" href="https://www.instagram.com/angus.young96/"><FaInstagram/></a> 
                        <a className="twitter" href="https://twitter.com/Aerosmith2211"><FaTwitter/></a> 
                        <a className="linkedin" href="https://www.linkedin.com/in/gianchungaacosta/"><FaLinkedinIn/></a> 
                        <a className="github"href="https://github.com/GiancarloAcosta96"><FaGithub/></a>
                    </RedesLi>
                
            </Contenedor>
        </ContenedorContacto>
    )
}