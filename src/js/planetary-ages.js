export default class PlanetaryAges {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = earthAge * (1 / .24);
    this.venusAge = earthAge * (1 / .62);
  }
}