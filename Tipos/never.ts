(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };
  // es una funcion que usualmente finaliza con un ERROR

  error("auxilio!");

  console.log("Hola mundo");
})();
