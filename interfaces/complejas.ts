(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAdress(id: string): string;
  }

  interface Address {
    id: number;
    codPostal: string;
    city: string;
  }

  const client: Client = {
    name: "Luis",
    age: 36,
    address: {
      id: 52,
      codPostal: "KY2 U45",
      city: "San Juan",
    },
    getFullAdress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Marisa",
    age: 34,
    address: {
      id: 524,
      codPostal: "SJ5 KK3",
      city: "San Juan",
    },
    getFullAdress(id: string) {
      return this.address.city;
    },
  };
})();
