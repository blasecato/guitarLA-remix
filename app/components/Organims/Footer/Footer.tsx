import Navigate from "~/components/Atoms/Navigate/Navigate";
function Footer() {
  return (
    <footer className="Footer">
      <div className="contenedor contenido">
        <Navigate />
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
