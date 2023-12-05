"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let StrongHeroes;
    (function (StrongHeroes) {
        StrongHeroes[StrongHeroes["acuaman"] = 0] = "acuaman";
        StrongHeroes[StrongHeroes["batman"] = 1] = "batman";
        StrongHeroes[StrongHeroes["flash"] = 5] = "flash";
        StrongHeroes[StrongHeroes["superman"] = 100] = "superman";
    })(StrongHeroes || (StrongHeroes = {}));
    const fuerzaSuperman = StrongHeroes.superman;
    const fuerzaAcuaman = StrongHeroes.acuaman;
    const fuerzaBatman = StrongHeroes.batman;
    const fuerzaFlash = StrongHeroes.flash;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
