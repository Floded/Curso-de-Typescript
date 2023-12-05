(() => {
  const fullName = (firstName: string, age: number): string => {
    return `${firstName}, ${age}`;
  }; // Siempre declarar que tipo de dato van a tener los argumentos!!

  let hero = fullName("Batman", 58); // Typescript se quejara si no se le colocan los argumentos requeridos por la funcion!!

  console.log({ hero });
})();
