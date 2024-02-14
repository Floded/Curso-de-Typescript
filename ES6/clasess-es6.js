(() => {
  class Avenger {
    name;
    power;

    constructor(name = "name here", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvengers {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const vision = new Avenger("Vision", 8500);
  const scarletWitch = new FlyingAvengers("Bruja Escarlata", 5002);

  console.log(vision);
  console.log(scarletWitch);
})();
