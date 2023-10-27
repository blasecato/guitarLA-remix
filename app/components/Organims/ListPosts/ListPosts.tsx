import CardPost from "~/components/Atoms/Cards/CardPost";

interface PropsAttributes {
  content: string;
  createdAt: string;
  image: any;
  publishedAt: string;
  title: string;
  updatedAt: string;
  url: string;
}
interface PropsPost {
  attributes: PropsAttributes;
  id: number;
}
interface PropsPosts {
  posts: PropsPost[];
}

function ListPosts({ posts }: PropsPosts) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts?.map((post: PropsPost) => (
          <CardPost post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default ListPosts;
