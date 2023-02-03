import PlanetaryAges from "../js/planetary-ages.js";

export default class YearsPassed {
  constructor(currentAge, previousAge) {
    this.earthYears = (currentAge - previousAge);
  }
}