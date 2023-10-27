import { useState } from "react";
import { getGuitarId } from "~/models/guitars.server";
import type { MetaFunction } from "@remix-run/react";
import {
  useLoaderData,
  useOutletContext,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import stylesStore from "~/styles/guitars.css";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

interface Props {
  params?: any;
  location?: any;
}

export async function loader({ params }: Props) {
  const { guitar } = params;
  const response = await getGuitarId(guitar);
  if (response?.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No se encontro la Guitarra",
    });
  }
  return response.data[0];
}

export const meta: MetaFunction<typeof loader> = ({ data, error }) => {
  return [{ title: `Guitar-LA - ${!data ? "error" : data.attributes.name}` }];
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesStore,
    },
  ];
}

function Guitar() {
  const [ammount, setAmmount] = useState(0);
  const guitar: any = useLoaderData();
  const { name, description, image, price } = guitar.attributes;
  const { addToCar }: any = useOutletContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (ammount < 1) {
      alert("debe  seleccionar una cantidad");
      return;
    }
    const guitarSelect = {
      id: guitar.id,
      image: image.data.attributes?.formats?.medium.url,
      name,
      price,
      ammount,
    };
    addToCar(guitarSelect);
  };
  return (
    <main className="contenedor">
      <div className="guitar">
        <img
          src={image.data.attributes?.formats?.medium.url}
          alt={`guitar-${name}`}
          className="iconGuitar"
        />
        <div className="content">
          <h3>{name}</h3>
          <p className="text">{description}</p>
          <p className="price">$ {price}</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-item">
              <label htmlFor="ammount">Cantidad</label>
              <select
                id="ammount"
                className="select"
                onChange={(e) => setAmmount(+e.target.value)}>
                <option value="0">--- Seleccione ---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                type="submit"
                className="button"
                value="Agregar al carrito"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export default Guitar;
