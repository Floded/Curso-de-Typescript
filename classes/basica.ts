(() => {
  // Clase en TS

  //   class Avenger {
  //     private name: string;
  //     private team: string;
  //     public realName: string;
  //     static age: number = 35;

  //     constructor(name: string, team: string, realName: string) {
  //       this.name = name;
  //       this.team = team;
  //       this.realName = realName;
  //     }
  //   }  Metodo extendido

  class Avenger {
    static age: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  // metodo Corto

  const antman: Avenger = new Avenger("Antman", "capitan", "Scot Lang");
  //   console.log(antman);
  //   console.log(Avenger.age); // muestra la variable estatica
  //   console.log(antman.bio());
})();
