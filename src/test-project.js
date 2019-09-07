// write a function that will capture the input of age for each planet
export function Galactic(mercuryCalculator,venusCalculator,marsCalculator,jupiterCalculator) {
  this.mercuryCalculator = mercuryCalculator;
  this.venusCalculator = venusCalculator;
  this.marsCalculator = marsCalculator;
  this.jupiterCalculator = jupiterCalculator;
}
// write a prototype that will take the age from the user and apply it to each planet

Galactic.prototype.ageCalculator = function () {
  let earthYears = 6;
  return this.mercuryCalculator + earthYears;

  // this.venusCalculator = .62;
  // this.mercuryCalculator = .24 * earthYears;
  // this.marsCalculator = 1.88 * earthYears;
  // this.jupiterCalculator =  11.86 * earthYears;


};
//write a function that will calculate how much life time a person has left
