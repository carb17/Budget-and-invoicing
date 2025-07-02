import { Footer } from "../../components/layout/footer/Footer.tsx";
import { Navbar } from "../../components/layout/navbar/Navbar.tsx";
import { OpcionesMenu } from "../../components/layout/menu/OpcionesMenu.tsx";

export function PaginaPrincipal() {
  return (
    <>
      <Navbar></Navbar>
      <OpcionesMenu />
      <Footer></Footer>
    </>
  );
}
