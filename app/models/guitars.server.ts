export async function getGuitars() {
  const url = "/api/guitarras?populate=image";
  const response = await fetch(`${process.env.API_URL_PROD}${url}`);
  const result = await response.json();
  return result;
}
export async function getGuitarId(id: string) {
  const url = `/api/guitarras?filters[url]=${id}&populate=image`;
  const response = await fetch(`${process.env.API_URL_PROD}${url}`);
  const result = await response.json();
  return result;
}