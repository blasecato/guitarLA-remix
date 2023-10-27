import { getPostId } from "~/models/post.server";
import type { MetaFunction } from "@remix-run/react";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import { dateFormat } from "~/common/utils/dateFormat";

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
  const { post } = params;

  const response = await getPostId(post);
  if (response?.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No se encontro la Guitarra",
    });
  }
  return response.data[0];
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `Guitar-LA - ${!data ? "error" : data.attributes.title}` }];
};

function PostId() {
  const post: any = useLoaderData();
  const { title, content, image, publishedAt } = post.attributes;

  return (
    <article className="post">
      <img
        src={image.data.attributes.url}
        alt={`guitar-${title}`}
        className="iconGuitar mt-3"
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormat(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
}
export default PostId;
