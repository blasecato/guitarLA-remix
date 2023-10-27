export async function getPosts() {
  const url = "/api/posts?populate=image";
  const response = await fetch(`${process.env.API_URL_PROD}${url}`);
  const result = await response.json();
  return result;
}
export async function getPostId(id: string) {
  const url = `/api/posts?filters[url]=${id}&populate=image`;
  const response = await fetch(`${process.env.API_URL_PROD}${url}`);
  const result = await response.json();
  return result;
}