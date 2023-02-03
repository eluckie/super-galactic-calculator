export default class YearsToCome {
  constructor(currentAge, otherAge) {
    const adjustedAge = otherAge - currentAge;
    this.earthYears = adjustedAge;
    this.mercuryYears = adjustedAge * (1 / .24);
    this.venusYears = adjustedAge * (1 / .62);
    this.marsYears = adjustedAge / 1.88;
    this.jupiterYears = adjustedAge / 11.86;
  }
}