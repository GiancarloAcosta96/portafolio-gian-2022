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
                        <a className="facebook" href=""><FaFacebookF/></a>
                        <a className="instagram"><FaInstagram/></a> 
                        <a className="twitter" href=""><FaTwitter/></a> 
                        <a className="linkedin" href=""><FaLinkedinIn/></a> 
                        <a className="github"href=""><FaGithub/></a>
                    </RedesLi>
                
            </Contenedor>
        </ContenedorContacto>
    )
}