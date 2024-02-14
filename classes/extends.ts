(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      //   console.log("constructor avenger llamada!");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      //   console.log("Constructor Xmen llamado!!");
    }
    getFullNameDesdeXmen() {
      return `${this.name} - ${this.realName}`; // metodo clasico
    }

    get fullName() {
      return `${this.name} - ${this.realName}`; // el metodo get debe si o si retornar algo
    }

    set fullName(name: string) {
      this.name = name; // el metodo SET obligatoriamente debe recibir un parametro y no retorna nada
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  wolverine.fullName = "X";
  //   console.log(wolverine.fullName);
  //   wolverine.getFullNameDesdeXmen();
})();
