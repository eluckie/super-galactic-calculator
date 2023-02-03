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
});