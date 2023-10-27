import { Link } from "@remix-run/react";
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

interface Props {
  guitar: ObjectGuitar;
}
const CardGuitar = ({ guitar }: Props) => {
  const { name, price, description, image, url } = guitar;

  return (
    <div className="guitar">
      <img
        src={image.data.attributes?.formats?.medium.url}
        alt={`guitar-${name}`}
        className="iconGuitar"
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
        <Link to={`/guitars/${url}`} className="link">
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default CardGuitar;
