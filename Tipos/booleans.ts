// Iniciamos una funcion autoivocada
(() => {
  let isSuperman: boolean = true;

  let isCapitanAmerica: boolean = false;

  isCapitanAmerica = isSuperman ? true : false; // Si no es booleano da error..

  let messiIsExtraterrestre: boolean = true;

  console.log(isCapitanAmerica);
})();
