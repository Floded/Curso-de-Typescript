(() => {
  const superman: string = "Superman";

  const batman: string = "Batman";

  const capitanAmerica: string = `Hero: Capitan America`;

  console.log({ superman });

  console.log({ capitanAmerica });

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No hay caracter");
})();
