"use strict";
// Iniciamos una funcion autoivocada
(() => {
    let isSuperman = true;
    let isCapitanAmerica = false;
    isCapitanAmerica = isSuperman ? true : false; // Si no es booleano da error..
    let messiIsExtraterrestre = true;
    console.log(isCapitanAmerica);
})();
