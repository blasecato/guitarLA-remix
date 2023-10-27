import { useLoaderData, Outlet, useOutletContext } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import stylesStore from "~/styles/guitars.css";
import ListGuitars from "~/components/Organims/ListGuitars/ListGuitars";

export function meta() {
  return [
    {
      title: "Guitar LA - Tienda de guitarras",
    },
  ];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesStore,
    },
  ];
}
export async function loader() {
  const guitars = await getGuitars();
  return guitars?.data;
}

export default function Store() {
  const guitars: any = useLoaderData();

  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()} />
      <ListGuitars guitars={guitars} />
    </main>
  );
}
