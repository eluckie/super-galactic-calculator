import { TestScheduler } from "jest";
import PlanetaryAges from "../src/js/PlanetaryAges.js";

describe("PlanetaryAges", () => {

  test("should correctly create an object with user's age on Earth", () => {
    const person = new PlanetaryAges(30, 0);
    expect(person.earthYears).toEqual(30);
  });

  test("should correctly calculate user's age in Mercury years by using their age on Earth", () => {
    const person = new PlanetaryAges(30, 0);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual((30 * (1 / .24)).toFixed(2));
  });

  test("should correctly calculate user's age in Mercury and Venus years by using their age on Earth", () => {
    const person = new PlanetaryAges(30, 0);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual((30 * (1 / .24)).toFixed(2));
    expect(person.venusYears).toEqual((30 * (1 / .62)).toFixed(2));
  });

  test("should correctly calculate user's age in Mercury, Venus, and Mars years by using their age on Earth", () => {
    const person = new PlanetaryAges(30, 0);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual((30 * (1 / .24)).toFixed(2));
    expect(person.venusYears).toEqual((30 * (1 / .62)).toFixed(2));
    expect(person.marsYears).toEqual((30 / 1.88).toFixed(2));
  });

  test("should correctly calculate user's age in Mercury, Venus, Mars, and Jupiter years by using their age on Earth", () => {
    const person = new PlanetaryAges(30, 0);
    expect(person.earthYears).toEqual(30);
    expect(person.mercuryYears).toEqual((30 * (1 / .24)).toFixed(2));
    expect(person.venusYears).toEqual((30 * (1 / .62)).toFixed(2));
    expect(person.marsYears).toEqual((30 / 1.88).toFixed(2));
    expect(person.jupiterYears).toEqual((30 / 11.86).toFixed(2));
  });

  
});