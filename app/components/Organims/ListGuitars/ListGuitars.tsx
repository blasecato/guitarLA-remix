import CardGuitar from "~/components/Atoms/Cards/CardGuitar";

interface ObjectGuitar {
  description: string;
  name: string;
  price: number;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  image: any;
}

interface PropsGuitars {
  guitars: ObjectGuitar[];
}

function ListGuitars({ guitars }: PropsGuitars) {
  return (
    <>
      <h2 className="heading">Nuestra colección</h2>
      <div className="guitar-grid">
        {guitars?.map((guitar: any) => (
          <CardGuitar guitar={guitar.attributes} key={guitar.id} />
        ))}
      </div>
    </>
  );
}
export default ListGuitars;
