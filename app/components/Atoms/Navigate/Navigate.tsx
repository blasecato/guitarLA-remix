import { Link, useLocation } from "@remix-run/react";
import carPng from "../../../../public/images/carrito.png";

const Navigate = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={`${location.pathname === "/" && "link-active"}`}>
        Inicio
      </Link>
      <Link
        to="/aboutMe"
        className={`${location.pathname === "/aboutMe" && "link-active"}`}>
        Nosotros
      </Link>
      <Link
        to="/guitars"
        className={`${location.pathname === "/store" && "link-active"}`}>
        Tienda
      </Link>
      <Link
        to="/post"
        className={`${location.pathname === "/post" && "link-active"}`}>
        Bolg
      </Link>
      <Link
        to="/car"
        className={`${location.pathname === "/car" && "link-active"}`}>
        <img src={carPng} alt="car" className="car" />
      </Link>
    </nav>
  );
};

export default Navigate;
