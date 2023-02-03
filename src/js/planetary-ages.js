export default class PlanetaryAges {
  constructor(currentAge, otherAge) {
    const adjustedAge = currentAge - otherAge;
    this.earthYears = adjustedAge;
    this.mercuryYears = adjustedAge * (1 / .24);
    this.venusYears = adjustedAge * (1 / .62);
    this.marsYears = adjustedAge / 1.88;
    this.jupiterYears = adjustedAge / 11.86;
  }
}