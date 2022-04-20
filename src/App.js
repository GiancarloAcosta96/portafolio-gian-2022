import Contacto from "./componentes/Contacto/Contacto";
import Cuerpo from "./componentes/Cuerpo/Cuerpo";
import Navbar from "./componentes/Navbar/Navbar";
import Portafolio from "./componentes/Portafolio/Portafolio";
import Servicios from "./componentes/Servicios/Servicios";
import SobreMi from "./componentes/SobreMi/SobreMi";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Cuerpo></Cuerpo>
    <SobreMi></SobreMi>
    <Servicios></Servicios>
    <Portafolio></Portafolio>
    <Contacto></Contacto>
    </>
  );
}

export default App;
