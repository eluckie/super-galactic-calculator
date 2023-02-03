export default class PlanetaryAges {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = earthAge * (1 / .24);
    this.venusAge = earthAge * (1 / .62);
    this.marsAge = earthAge / 1.88;
    this.jupiterAge = earthAge / 11.86;
  }
}