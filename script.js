/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2) {
  this.sum = function () {
    return number1 + number2;
  };
  this.subtraction = function () {
    return number1 - number2;
  };
  this.multiplication = function () {
    return number1 * number2;
  };
  this.division = function () {
    return number1 / number2;
  };
}

let result = new Calculator(10, 5);

console.log(result);
console.log(result.sum());
console.log(result.subtraction());
console.log(result.multiplication());
console.log(result.division());
