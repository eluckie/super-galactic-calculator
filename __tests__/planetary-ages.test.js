import { TestScheduler } from "jest";
import PlanetaryAges from "../src/js/planetary-ages.js";

describe("PlanetaryAges", () => {

  test("should correctly create an object with user's age on Earth", () => {
    const person = new PlanetaryAges(30);
    expect(person.earthAge).toEqual(30);
  });

});