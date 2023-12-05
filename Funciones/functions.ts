(() => {
  const hero: string = "Capitan America";

  const heroPower: number = 500;

  function returnHeroName(): string {
    return hero;
  } // Especificamos que la funcion va a retornar un string!!

  function returnHeroPower(): number {
    return heroPower;
  } // Especificamos que la funcion va a retornar un number tambien podemos modificarla para que retorne un bolleano, void, null o undifined!!
})();
