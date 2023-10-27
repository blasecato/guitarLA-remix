export const dateFormat = (date: string) => {
  const dateNew = new Date(date);
  return dateNew.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })
}