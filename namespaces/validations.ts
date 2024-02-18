namespace Validations {
  export const validateText = (test: string): boolean => {
    return test.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Lui"));
