import React from "react";
import { ContenedorCartasPortafolio, ContenedorP, CardP, ContenedorPortafolio } from "./PortafolioElements";


export default function Portafolio() {
    return(
        <ContenedorPortafolio>
            
            <ContenedorP>
                <h2>Portafolio</h2>
                <ContenedorCartasPortafolio>
                    <CardP imgUrl="../Portafolio/pokeapi.png">
                        <h2>Portafolio1</h2>
                    </CardP>

                    <CardP>
                        <h2>Portafolio2</h2>
                    </CardP>

                    <CardP>
                        <h2>Portafolio3</h2>
                    </CardP>
                </ContenedorCartasPortafolio>
            </ContenedorP>
        </ContenedorPortafolio>
    )
}