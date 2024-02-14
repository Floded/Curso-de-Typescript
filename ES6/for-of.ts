(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const capAmerica: Avenger = {
    name: "Capitan America",
    weapon: "Escudo",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, thor, capAmerica];

  for (const indiceAIterar of avengers) {
    console.log(indiceAIterar.name);
  }
})();
