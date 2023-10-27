import { useEffect, useState } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import carStyles from "../styles/car.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: carStyles,
    },
  ];
}
export function meta() {
  return [
    {
      title: "Guitar LA - Carrito de compras",
    },
  ];
}
interface ObjetCar {
  ammount: number;
  id: number;
  image: string;
  name: string;
  price: number;
}

function Car() {
  const [total, setTotal] = useState(0);
  const { car, updateAmmount, deleteGuitarCar }: any = useOutletContext();

  useEffect(() => {
    const calcTotal = car.reduce(
      (total: number, currenValue: any) =>
        total + currenValue.ammount * currenValue.price,
      0
    );
    setTotal(calcTotal);
  }, [car]);

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="content">
        <div className="car">
          <h2>Articulos</h2>
          {car?.length === 0 ? (
            <div className="empty">
              <h1 className="">Carrito vacio</h1>
              <Link to="/guitars">Ir a la tienda de guitarras</Link>
            </div>
          ) : (
            car?.map((currentCar: ObjetCar) => (
              <div className="item" key={currentCar.id}>
                <div className="image">
                  <img src={currentCar.image} alt="icon" className="image" />
                </div>
                <div className="data">
                  <p className="name">{currentCar.name}</p>
                  <p className="price">
                    Precio: $<span>{currentCar.price}</span>
                  </p>
                  <p className="ammount">Cantidad:</p>
                  <select
                    id="ammount"
                    className="select"
                    onChange={(e) =>
                      updateAmmount({
                        ammount: +e.target.value,
                        id: currentCar.id,
                      })
                    }
                    value={currentCar.ammount}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className="subtotal">
                    Subtotal: $
                    <span>{currentCar.ammount * currentCar.price}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteGuitarCar(currentCar.id)}
                  className="delete">
                  Delete x
                </button>
              </div>
            ))
          )}
        </div>
        <div className="summary">
          <h3>Resumen del pedido</h3>
          <p className="price">total a pagar: ${total}</p>
        </div>
      </div>
    </main>
  );
}

export default Car;
