import { TestScheduler } from "jest";
import PlanetaryAges from "../src/js/planetary-ages.js";

describe("PlanetaryAges", () => {

  test("should correctly create an object with user's age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthAge).toEqual(30);
  });

  test("should correctly calculate user's age in Mercury years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthAge).toEqual(30);
    expect(person.mercuryAge).toEqual(30 * (1 / .24));
  });

  test("should correctly calculate user's age in Mercury and Venus years by using their age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthAge).toEqual(30);
    expect(person.mercuryAge).toEqual(30 * (1 / .24));
    expect(person.venusAge).toEqual(30 * (1 / .62));
  });
});