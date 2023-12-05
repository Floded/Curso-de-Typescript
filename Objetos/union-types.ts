(() => {
  type SuperHero = {
    name: string;
    age: number;
    power: string[];
    getName?: () => string;
  };

  let myCustomeVariable: string | number | SuperHero = "Luis";
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
