import { Link } from "@remix-run/react";
import Navigate from "~/components/Atoms/Navigate/Navigate";
import LogoSvg from "../../../../public/images/logo.svg";
function Header() {
  return (
    <header className="Header">
      <div className="contenedor barra">
        <Link to="/">
          <img src={LogoSvg} className="logo" alt="logo" />
        </Link>
        <Navigate />
      </div>
    </header>
  );
}

export default Header;
