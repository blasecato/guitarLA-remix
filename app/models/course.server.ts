export async function getCourse() {
  const url = "/api/course?populate=image";
  const response = await fetch(`${process.env.API_URL_PROD}${url}`);
  const result = await response.json();
  return result;
}