import { Link } from "@remix-run/react";
import { dateFormat } from "~/common/utils/dateFormat";

interface PropsAttributes {
  content: string;
  createdAt: string;
  image: any;
  publishedAt: string;
  title: string;
  updatedAt: string;
  url: string;
}

interface Props {
  post: PropsAttributes;
}
const CardPost = ({ post }: Props) => {
  const { title, content, image, url, publishedAt } = post;

  return (
    <article className="post">
      <img
        src={image.data.attributes?.formats?.medium.url}
        alt={`guitar-${title}`}
        className="iconGuitar"
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormat(publishedAt)}</p>
        <p className="description">{content}</p>
        <Link to={`/post/${url}`} className="link">
          Leer post
        </Link>
      </div>
    </article>
  );
};

export default CardPost;
