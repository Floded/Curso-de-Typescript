(() => {
  // Se crea un tipo con la palabra reservada TIPE para asignarle los tipos de cada clave / valor y luego se la asigna a cada obj que deceemos que posea ese tipo..!!

  type SuperHero = {
    name: string;
    age: number;
    power: string[];
    getName?: () => string;
  };

  let ironMan: SuperHero = {
    name: "Tony Stark",
    age: 54,
    power: ["philantropo", "Rich"],
  };

  let drStrage: SuperHero = {
    name: "Steve",
    age: 80,
    power: ["Levitacion"],
  };

  console.log({ ironMan });
})();
