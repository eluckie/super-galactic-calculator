import PlanetaryAges from "../js/planetary-ages.js";

export default class YearsPassed {
  constructor(currentAge, previousAge) {
    const earthYearsPassed = (currentAge - previousAge);
    this.earthYears = earthYearsPassed;
    this.mercuryYears = earthYearsPassed * (1 / .24);
    this.venusYears = earthYearsPassed * (1 / .62);
  }
}