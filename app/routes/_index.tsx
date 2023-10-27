import { getGuitars } from "~/models/guitars.server";
import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import { getCourse } from "~/models/course.server";
import stylesGuitar from "~/styles/guitars.css";
import stylesCourse from "~/styles/course.css";
import stylesPost from "~/styles/post.css";
import ListGuitars from "~/components/Organims/ListGuitars/ListGuitars";
import ListPosts from "~/components/Organims/ListPosts/ListPosts";
import Course from "~/components/Organims/Course/Course";

export const meta: MetaFunction<typeof loader> = () => {
  return [{ title: `Guitar-LA` }];
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitar,
    },
    {
      rel: "stylesheet",
      href: stylesPost,
    },
    {
      rel: "stylesheet",
      href: stylesCourse,
    },
  ];
}
export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);
  return { guitars: guitars.data, posts: posts.data, course: course.data };
}
export default function Index() {
  const { guitars, posts, course }: any = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListGuitars guitars={guitars} />
      </main>
      <Course course={course.attributes} />
      <section className="contenedor">
        <ListPosts posts={posts} />
      </section>
    </>
  );
}
