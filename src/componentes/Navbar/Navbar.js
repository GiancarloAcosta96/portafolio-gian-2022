import React, {useState} from "react";
import { Container, IconoHamburguesa, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../Navbar/logoG.svg";

export default function Navbar() {

    const [mostrarMenu, setMostrarMenu] = useState(false);

    return (
        <Container>
        <Wrapper>
            <IconContext.Provider value= {{style: {fontSize: "2em"}}}>

            <LogoContainer>
                <h1>Gian</h1>
            </LogoContainer>

            <IconoHamburguesa onClick={() => setMostrarMenu(!mostrarMenu)}>
                {
                    mostrarMenu ? <FaTimes /> : <FaBars />
                }
            </IconoHamburguesa>

                <Menu open = {mostrarMenu}>
                    <MenuItem>
                    <MenuItemLink onClick={() => setMostrarMenu(!mostrarMenu)}>
                        Inicio
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setMostrarMenu(!mostrarMenu)}>
                        Sobre mi
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setMostrarMenu(!mostrarMenu)}>
                        Servicios
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setMostrarMenu(!mostrarMenu)}>
                        Portafolio
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink className="btnContacto" onClick={() => setMostrarMenu(!mostrarMenu)}>
                        Contacto
                    </MenuItemLink>
                    </MenuItem>
                </Menu>
            </IconContext.Provider>
            </Wrapper>
        </Container>
    )

}
