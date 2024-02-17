(() => {
  interface addToNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunctions: addToNumbers;

  addNumbersFunctions = (a: number, b: number) => {
    return 10;
  };
})();
