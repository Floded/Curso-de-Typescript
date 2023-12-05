"use strict";
(() => {
    const fullName = (firstName, age, isAlive = true) => {
        if (isAlive) {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleUpperCase();
        }
        else {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleLowerCase();
        }
    }; // los argumentos obligatorios deben ir antes de los opcionales de lo contrario el argumento ya deberia tener un valor asignado por defecto como en este caso "isAlive" por defecto le asignamos el valor de true
    let hero = fullName("Batman", 58);
    console.log({ hero });
})();
