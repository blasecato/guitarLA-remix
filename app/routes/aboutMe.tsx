import weJpg from "../../public/images/nosotros.jpg";
import weStyles from "../styles/nosotros.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: weStyles,
    },
  ];
}
export function meta() {
  return [
    {
      title: "Guitar LA - Nosotros",
    },
  ];
}
export default function AboutMe() {
  return (
    <main className="Nosotros contenedor">
      <h1>Nosotros</h1>
      <div className="contenido">
        <img src={weJpg} alt="imagen" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur ac odio sit amet vehicula. Cras tellus tortor, sodales
            quis magna sed, facilisis posuere orci. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Vivamus diam diam, consequat sed leo nec, tincidunt vehicula risus.
            Donec lobortis luctus laoreet. Mauris vel feugiat velit. Ut lobortis
            diam purus, commodo bibendum diam placerat non.
          </p>
        </div>
      </div>
    </main>
  );
}
