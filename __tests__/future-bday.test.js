import { TestScheduler } from "jest";
import YearsToCome from "../src/js/future-bday.js";

describe("YearsToCome", () => {

  test("should correctly create an object that calculates how many Earth years will need to pass until a future birthday", () => {
    const currentAge = 20;
    const futureAge = 30;
    const yearDifference = (futureAge - currentAge);
    const yearsNeeded = new YearsToCome(currentAge, futureAge);
    expect(yearsNeeded.earthYears).toEqual(yearDifference);
  });

  test("should correctly calculate years need to pass in Mercury, Venus, Mars and Jupiter years by using the years needed to pass on Earth", () => {
    const currentAge = 20;
    const futureAge = 30;
    const yearDifference = (futureAge - currentAge);
    const yearsNeeded = new YearsToCome(currentAge, futureAge);
    expect(yearsNeeded.earthYears).toEqual(yearDifference);
    expect(yearsNeeded.mercuryYears).toEqual(yearDifference * (1 / .24));
    expect(yearsNeeded.venusYears).toEqual(yearDifference * (1 / .62));
    expect(yearsNeeded.marsYears).toEqual(yearDifference / 1.88);
    expect(yearsNeeded.jupiterYears).toEqual(yearDifference / 11.86);
  });
});