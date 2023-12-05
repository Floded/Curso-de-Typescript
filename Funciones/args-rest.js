"use strict";
(() => {
    // const fullName = (firtsName: string): string => {
    //     return `${firtsName} $ {paramentroQueNoEsta}`
    // } // De este modo solo podemos pasarle un solo porametro pero si queremos pasarles parametros indefinidos se hace de la siguiente forma;
    const fullName = (firtsName, ...restoDeParametros) => {
        return `${firtsName} ${restoDeParametros.join(" ")}`;
    };
    let hero = fullName("Steve", "Amadeus", "Nicolas", "Eren", "Rogers"); // No importa la cantidad de parametros que reciba, con el metodo rest los va a incluir en la funcion y los ejecutara, asi tambien como si le pasemos un solo parametro;
    console.log(hero);
})();
//# sourceMappingURL=args-rest.js.map