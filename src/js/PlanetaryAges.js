export default class PlanetaryAges {
  constructor(currentAge, otherAge) {
    const adjustedAge = currentAge - otherAge;
    this.earthYears = adjustedAge;
    this.mercuryYears = (adjustedAge * (1 / .24)).toFixed(2);
    this.venusYears = (adjustedAge * (1 / .62)).toFixed(2);
    this.marsYears = (adjustedAge / 1.88).toFixed(2);
    this.jupiterYears = (adjustedAge / 11.86).toFixed(2);
  }
}