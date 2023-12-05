"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
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
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, age, isAlive = true) => {
        if (isAlive) {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleUpperCase();
        }
        else {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleLowerCase();
        }
    };
    let hero = fullName("Batman", 58);
    console.log({ hero });
})();
(() => {
    const fullName = (firstName, age) => {
        return `${firstName}, ${age || "NO AGE"}`;
    };
    let hero = fullName("Batman");
    console.log({ hero });
})();
(() => {
    const fullName = (firstName, age) => {
        return `${firstName}, ${age}`;
    };
    let hero = fullName("Batman", 58);
    console.log({ hero });
})();
(() => {
    const fullName = (firtsName, ...restoDeParametros) => {
        return `${firtsName} ${restoDeParametros.join(" ")}`;
    };
    let hero = fullName("Steve", "Amadeus", "Nicolas", "Eren", "Rogers");
    console.log(hero);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const saludar = (name) => `Hola ${name}`;
    const returnText = () => "Retornando texto";
    let myFunction;
    myFunction = returnText;
    console.log(returnText());
})();
(() => {
    const hero = "Capitan America";
    const heroPower = 500;
    function returnHeroName() {
        return hero;
    }
    function returnHeroPower() {
        return heroPower;
    }
})();
(() => {
    let ironMan = {
        name: "Tony Stark",
        age: 54,
        power: ["philantropo", "Rich"],
    };
    let drStrage = {
        name: "Steve",
        age: 80,
        power: ["Levitacion"],
    };
    console.log({ ironMan });
})();
(() => {
    let ironMan = {
        name: "Tony Stark",
        age: 54,
        power: ["philantropo", "Rich"],
    };
    let drStrage = {
        name: "Steve",
        age: 80,
        power: ["Levitacion"],
    };
    console.log({ ironMan });
})();
(() => {
    let myCustomeVariable = "Luis";
    console.log(myCustomeVariable);
    myCustomeVariable = 20;
    console.log(myCustomeVariable);
    myCustomeVariable = {
        name: "Alfredo",
        age: 35,
        power: ["ninguno"],
    };
    console.log(myCustomeVariable);
})();
(() => {
    let avenger;
    avenger = "Iron man";
    console.log(avenger);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const names = ["Hector", "Luis", "Juan"];
    console.log(numbers);
    names.forEach((name) => console.log(name.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isCapitanAmerica = false;
    isCapitanAmerica = isSuperman ? true : false;
    let messiIsExtraterrestre = true;
    console.log(isCapitanAmerica);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["first"] = 1] = "first";
        AudioLevel[AudioLevel["second"] = 2] = "second";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.first;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        return 1;
    };
    error("auxilio!");
    console.log("Hola mundo");
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let isHigth = 10;
    console.log(isHigth);
    const isLow = 20;
    if (isHigth > isLow) {
        console.log("Higth win");
    }
    else {
        console.log("Low win");
    }
})();
(() => {
    var _a;
    const superman = "Superman";
    const batman = "Batman";
    const capitanAmerica = `Hero: Capitan America`;
    console.log({ superman });
    console.log({ capitanAmerica });
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No hay caracter");
})();
(() => {
    const hero = ["Ironman", 200];
    hero[0] = "Megaman";
    hero[1] = 100;
    console.log(hero);
})();
(() => {
    function funcionSinRetorno() {
        return;
    }
    const otraFuncionSinRetorno = () => {
        return;
    };
    const a = funcionSinRetorno();
    console.log(a);
})();
//# sourceMappingURL=main.js.map