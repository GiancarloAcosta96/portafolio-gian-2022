import React from "react";
import { Card, Contenedor, ContenedorCartas, ContenedorServicios } from "./ServiciosElements";
import host from "../Servicios/host.svg";
import responsive from "../Servicios/responsive.svg";
import web from "../Servicios/web.svg";
import mantenimiento from "../Servicios/mantenimiento.svg";
import design from "../Servicios/design.svg";
import seo from "../Servicios/seo.svg";

export default function Servicios(){
    return(
        <ContenedorServicios>
            
            <Contenedor>
                <h2>Servicios</h2>    
                <ContenedorCartas>

                <Card>
                    <img src={web} alt="web" />
                    <h2>Desarrollo Web</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>
                <Card>
                    <img src={design} alt="hosting" />
                    <h2>Diseño Web Profesional</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>
                <Card>
                    <img src={responsive} alt="responsive" />
                    <h2>Diseño Responsive</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>
                
                <Card>
                    <img src={host} alt="hosting" />
                    <h2>Hosting Gratuito</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>

                <Card>
                    <img src={seo} alt="hosting" />
                    <h2>Posicionamiento Web - SEO</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>
                <Card>
                    <img src={mantenimiento} alt="hosting" />
                    <h2>Mantenimiento</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio aspernatur obcaecati accusantium recusandae consequuntur tenetur ad aperiam temporibus debitis?</p>
                </Card>
                </ContenedorCartas>


            </Contenedor>

        </ContenedorServicios>
    )
}