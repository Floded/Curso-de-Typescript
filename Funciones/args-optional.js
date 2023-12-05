"use strict";
(() => {
    const fullName = (firstName, age) => {
        return `${firstName}, ${age || "NO AGE"}`;
    }; // agregando el signo de interrogacion (?) convertimos el argumento en opcional. Es decir que no es obligatorio que este presente para continuar con la ejecucion. PERO DEBEMOS VALIDAR DENTRO DE LA FUNCION QUE SUCEDE SI ESTE ARGUMENTO NO ESTA LLEGANDO..!!!
    let hero = fullName("Batman");
    console.log({ hero });
})();
//# sourceMappingURL=args-optional.js.map