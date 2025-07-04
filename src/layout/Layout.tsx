import { Navbar } from "./navbar/Navbar";
import { Menu } from "./menu/Menu";
import { Footer } from "./footer/Footer";

import { LayoutProps } from "./props/LayoutProps";

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container">
      <Menu />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
