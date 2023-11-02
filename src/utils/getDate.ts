export const getDate = () : string => {
  const fecha = new Date();
  const dia = String(fecha.getDate()).padStart(2, '0'); // Obtiene el día y lo rellena con 0 si es necesario
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // El mes está basado en 0, por lo que sumamos 1
  const anio = fecha.getFullYear();
  return `${anio}-${mes}-${dia}`;
}