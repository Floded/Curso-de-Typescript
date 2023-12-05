"use strict";
(() => {
    const fullName = (firtsName, ...restoDeParametros) => {
        return `${firtsName} ${restoDeParametros.join(" ")}`;
    };
    let hero = fullName("Steve", "Amadeus", "Nicolas", "Eren", "Rogers");
    console.log(hero);
})();
//# sourceMappingURL=args-rest.js.map