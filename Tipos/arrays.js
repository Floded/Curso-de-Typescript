"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const names = ["Hector", "Luis", "Juan"];
    // const mixTypes: (string | boolean)[] = ["Pelota", true, "Rata", 3];
    // Vemos que si no lo especificamos en el tipado no puede inculirse en el arreglo
    console.log(numbers);
    names.forEach((name) => console.log(name.toUpperCase()));
})();
