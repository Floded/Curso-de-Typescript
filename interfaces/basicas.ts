(() => {
  interface SuperHero {
    name: string;
    age: number;
    power: string[];
    getName?: () => string;
  }

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
})();
