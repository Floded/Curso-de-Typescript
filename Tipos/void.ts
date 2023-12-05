(() => {
  function funcionSinRetorno(): void {
    return;
  }
  // Con el tipo void indicamos que la funcion va a retornar siempre "vacio"
  const otraFuncionSinRetorno = (): void => {
    return;
  };

  const a = funcionSinRetorno();

  console.log(a);
})();
