export default class YearsToCome {
  constructor(currentAge, otherAge) {
    const earthYears = (otherAge - currentAge);
    this.earthYears = earthYears;
    this.mercuryYears = earthYears * (1 / .24);
    this.venusYears = earthYears * (1 / .62);
    this.marsYears = earthYears / 1.88;
    this.jupiterYears = earthYears/ 11.86;
  }
}