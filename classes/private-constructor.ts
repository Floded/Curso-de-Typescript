(() => {
  class Apocalipsis {
    static instance: Apocalipsis; // del mismo tipo de la clase
    private constructor(public name: string) {}

    static llamarApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis, el unico");
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.llamarApocalipsis();
  apocalipsis1.changeName("Wolverine");

  console.log(apocalipsis1); // No importa cuantas variables se creen todas van a ser la misma instancia!!
})();
