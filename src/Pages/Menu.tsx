import { Footer } from "../Components/Footer/Footer.tsx";
import { Navbar } from "../Components/Navbar/Navbar.tsx";
import { OpcionesMenu } from "../Components/Menu/OpcionesMenu.tsx";
import { Usuarios } from "./Usuarios.tsx";
export function Menu() {
  return (
    <>
      <Navbar></Navbar>
      <OpcionesMenu />
      <Usuarios />
      <Footer></Footer>
    </>
  );
}
