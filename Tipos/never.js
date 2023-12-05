"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    // es una funcion que usualmente finaliza con un ERROR
    error("auxilio!");
    console.log("Hola mundo");
})();
