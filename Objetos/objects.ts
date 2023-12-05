(() => {
  let ironMan: {
    name: string;
    age: number;
    power: string[];
    getName?: () => string;
  } = {
    name: "Tony Stark",
    age: 54,
    power: ["philantropo", "Rich"],
  };

  let drStrage: {
    name: string;
    age: number;
    power: string[];
    getName?: () => string;
  } = {
    name: "Steve",
    age: 80,
    power: ["Levitacion"],
  };

  console.log({ ironMan });
})();
