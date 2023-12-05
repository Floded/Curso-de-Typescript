"use strict";
(() => {
    function funcionSinRetorno() {
        return;
    }
    // Con el tipo void indicamos que la funcion va a retornar siempre "vacio"
    const otraFuncionSinRetorno = () => {
        return;
    };
    console.log(funcionSinRetorno);
    console.log(otraFuncionSinRetorno);
})();
