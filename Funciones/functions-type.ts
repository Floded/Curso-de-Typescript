(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const saludar = (name: string) => `Hola ${name}`;
  const returnText = () => "Retornando texto";

  //   let myFunction; //* Esta variable es de typo any y debemos evitar usarla, para ello vamos a asignarle el tipo function y le pasamos el tipo de cada argumento si lo require!!

  let myFunction: () => String; //* esta variable ahora es de tipo funcion. Dependiendo de la funcion que le asignemos seran los tipos de argumentos que le pasemos ej: let myFunction: (y: number, b: number) => number: esta hace referencia a la fn addNumbers donde los argumentos son "number" y el retorno es de tipo "number";

  //!   myFunction = 10;
  //!  console.log(myFunction);

  //!   myFunction = addNumbers;
  //!   console.log(myFunction());

  //!   myFunction = saludar;
  //!   console.log(saludar());

  myFunction = returnText;
  console.log(returnText()); // Como vemos esta funcion no recibe parametros y retorna un string por eso typescript no se queja...!
})();
