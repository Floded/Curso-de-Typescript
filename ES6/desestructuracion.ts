(() => {
  type Avengers = {
    nick: string;
    ironMan: string;
    vision: string;
    activos: number;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironMan: "Robert Downie Jr",
    vision: "Poul Bettany",
    activos: 1500,
    poder: 45.89,
  };

  const printAvengers = (avengers: Avengers) => {
    console.log(avengers.ironMan);
  };

  // printAvengers(avengers);

  const avengersArr: string[] = ["Cap. America", "Ironman", "Hulk"];

  const [indice0, indice1, indice2] = avengersArr;
  // console.log(indice1);
})();
