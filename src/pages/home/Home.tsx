import { Footer } from "../../layout/footer/Footer";
import { Navbar } from "../../layout/navbar/Navbar";
import { Menu } from "../../layout/menu/Menu";

export function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Menu />
      <Footer></Footer>
    </>
  );
}
