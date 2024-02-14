(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    salvarMundo() {
      //   console.log(`El mundo esta a salvo, gracias ${this.name}`);
    }
  }
  class Villians extends Mutant {
    conquistarMundo() {
      //   console.log("Los Villanos vencieron!");
    }
  }

  const ciclope = new Xmen("Ciclope", "Scott");
  const magneto = new Villians("Magneto", "Magnus");

  const printName = (character: Mutant) => {
    // console.log(character.realName);
  };

  //   printName(magneto);
  //   ciclope.salvarMundo();
  //   magneto.conquistarMundo();
})();
