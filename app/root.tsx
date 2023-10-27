import React, { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/Organims/Header/Header";
import Footer from "~/components/Organims/Footer/Footer";

export interface HtmlMetaDescriptor {
  charset?: "utf-8";
  title?: string;
}

export function meta() {
  return [
    { title: "Guitar-LA" },
    { charset: "utf-8" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&family=Outfit:wght@100;300;500;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

interface AppProps {
  children: React.ReactElement;
}
function Document({ children }: AppProps) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

interface ObjetCar {
  ammount?: number;
  id?: number;
  image?: string;
  name?: string;
  price?: number;
}
export default function App() {
  const carLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("car")) ?? []
      : null;

  const [car, setCar] = useState<ObjetCar[]>(carLS);

  const updateAmmount = (guitar: ObjetCar) => {
    const carUpdate = car.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.ammount = guitar.ammount;
      }
      return guitarState;
    });
    setCar(carUpdate);
  };

  const deleteGuitarCar = (id: number) => {
    const updateCar = car.filter((guitar) => guitar.id !== id);
    setCar(updateCar);
  };

  const addToCar = (guitarSelect: ObjetCar) => {
    if (car.some((guitarState) => guitarState.id === guitarSelect.id)) {
      const currentCard = car.map((guitarState) => {
        if (guitarState.id === guitarSelect.id) {
          guitarState.ammount = guitarSelect.ammount;
        }
        return guitarState;
      });
      setCar(currentCard);
    } else {
      setCar([...car, guitarSelect]);
    }
  };
  useEffect(() => {
    localStorage.setItem("car", JSON.stringify(car));
  }, [car]);
  return (
    <Document>
      <Outlet
        context={{
          addToCar,
          car,
          updateAmmount,
          deleteGuitarCar,
        }}
      />
    </Document>
  );
}

export function ErrorBoundary() {
  const error: any = useRouteError();
  return (
    <div className="h3">
      <h1>{error?.message} error</h1>
    </div>
  );
}
