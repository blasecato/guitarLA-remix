import { Outlet, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import postStyles from "~/styles/post.css";
import ListPosts from "~/components/Organims/ListPosts/ListPosts";

export function links() {
  return [{ rel: "stylesheet", href: postStyles }];
}
export async function loader() {
  const post = await getPosts();
  return post.data;
}

export default function Post() {
  const posts: any = useLoaderData();

  return (
    <main className="contenedor">
      <Outlet />
      <ListPosts posts={posts} />
    </main>
  );
}
