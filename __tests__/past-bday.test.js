import { TestScheduler } from "jest";
import PlanetaryAges from "../src/js/planetary-ages.js";
import YearsPassed from "../src/js/past-bday.js";

describe("YearsPassed", () => {

  test("should correctly create an object that calculates how many Earth years have passed since a previous birthday", () => {
    const currentAge = 30;
    const previousAge = 20;
    const yearDifference = (currentAge - previousAge);
    const yearsPassed = new YearsPassed(currentAge, previousAge);
    expect(yearsPassed.earthYears).toEqual(yearDifference);
  });

  test("should correctly calculate years passed in Mercury years by using the years passed on Earth", () => {
    const currentAge = 30;
    const previousAge = 20;
    const yearDifference = (currentAge - previousAge);
    const yearsPassed = new YearsPassed(currentAge, previousAge);
    expect(yearsPassed.earthYears).toEqual(yearDifference);
    expect(yearsPassed.mercuryYears).toEqual(yearDifference * (1 / .24));
  });

  test("should correctly calculate years passed in Mercury and Venus years by using the years passed on Earth", () => {
    const currentAge = 30;
    const previousAge = 20;
    const yearDifference = (currentAge - previousAge);
    const yearsPassed = new YearsPassed(currentAge, previousAge);
    expect(yearsPassed.earthYears).toEqual(yearDifference);
    expect(yearsPassed.mercuryYears).toEqual(yearDifference * (1 / .24));
    expect(yearsPassed.venusYears).toEqual(yearDifference * (1 / .62));
  });

  test("should correctly calculate years passed in Mercury, Venus and Mars years by using the years passed on Earth", () => {
    const currentAge = 30;
    const previousAge = 20;
    const yearDifference = (currentAge - previousAge);
    const yearsPassed = new YearsPassed(currentAge, previousAge);
    expect(yearsPassed.earthYears).toEqual(yearDifference);
    expect(yearsPassed.mercuryYears).toEqual(yearDifference * (1 / .24));
    expect(yearsPassed.venusYears).toEqual(yearDifference * (1 / .62));
    expect(yearsPassed.marsYears).toEqual(yearDifference / 1.88);
  });

  test("should correctly calculate years passed in Mercury, Venus, Mars and Jupiter years by using the years passed on Earth", () => {
    const currentAge = 30;
    const previousAge = 20;
    const yearDifference = (currentAge - previousAge);
    const yearsPassed = new YearsPassed(currentAge, previousAge);
    expect(yearsPassed.earthYears).toEqual(yearDifference);
    expect(yearsPassed.mercuryYears).toEqual(yearDifference * (1 / .24));
    expect(yearsPassed.venusYears).toEqual(yearDifference * (1 / .62));
    expect(yearsPassed.marsYears).toEqual(yearDifference / 1.88);
    expect(yearsPassed.jupiterYears).toEqual(yearDifference / 11.86);
  });
});