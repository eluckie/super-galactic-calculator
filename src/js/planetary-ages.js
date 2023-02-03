export default class PlanetaryAges {
  constructor(earthAge) {
    this.earthYears = earthAge;
    this.mercuryYears = earthAge * (1 / .24);
    this.venusYears = earthAge * (1 / .62);
    this.marsYears = earthAge / 1.88;
    this.jupiterYears = earthAge / 11.86;
  }

  // yearsPassed(currentAge, previousAge) {
  //   const yearDifference = (currentAge - previousAge);
  //   return yearDifference;
  // }
}