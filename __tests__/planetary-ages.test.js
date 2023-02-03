import { TestScheduler } from "jest";
import PlanetaryAges from "../src/js/planetary-ages.js";

describe("PlanetaryAges", () => {

  test("should correctly create an object with user's age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthYears).toEqual(30);
  });

  test("should correctly calculate user's age in Mercury years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual(30 * (1 / .24));
  });

  test("should correctly calculate user's age in Mercury and Venus years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual(30 * (1 / .24));
    expect(person.venusYears).toEqual(30 * (1 / .62));
  });

  test("should correctly calculate user's age in Mercury, Venus, and Mars years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual(30 * (1 / .24));
    expect(person.venusYears).toEqual(30 * (1 / .62));
    expect(person.marsYears).toEqual(30 / 1.88);
  });

  test("should correctly calculate user's age in Mercury, Venus, Mars, and Jupiter years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual(30 * (1 / .24));
    expect(person.venusYears).toEqual(30 * (1 / .62));
    expect(person.marsYears).toEqual(30 / 1.88);
    expect(person.jupiterYears).toEqual(30 / 11.86);
  });
});

describe("yearDifference", () => {

  test("should correctly calculate how many Earth years have passed since a previous birthday", () => {
    const currentAge = 30;
    const otherAge = 20;
    const years = yearDifference(currentAge, otherAge);
    const yearsPassed = new PlanetaryAges(years);
    expect(yearsPassed.earthYears).toEqual(years);
  });
});