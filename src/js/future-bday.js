export default class YearsToCome {
  constructor(currentAge, otherAge) {
    const earthYears = (otherAge - currentAge);
    this.earthYears = earthYears;
  }
}