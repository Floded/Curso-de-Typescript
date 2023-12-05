(() => {
  const error = (message: string): never | number => {
    return 1;
  };
  // es una funcion que usualmente finaliza con un ERROR

  error("auxilio!");

  console.log("Hola mundo");
})();
