import "./css/styles.css";
import YearsToCome from "./js/future-bday.js";
import PlanetaryAges from "./js/planetary-ages.js";

function getPlanetaryAges(event) {
  event.preventDefault();
  const error1 = document.getElementById("first-error-message");
  const error2 = document.getElementById("second-error-message");
  const currentAge = document.getElementById("current-age").value;
  error2.setAttribute("class", "hidden");

  if (!currentAge) {
    error1.removeAttribute("class");
  } else {
    error1.setAttribute("class", "hidden");
    const div = document.getElementById("ages-object");
    div.innerText = null;
    const otherAge = document.getElementById("other-age").value;
    const planetAges = new PlanetaryAges(currentAge, otherAge);
    const allPlanetAges = Object.values(planetAges);
    const mercuryP = document.createElement("p");
    const venusP = document.createElement("p");
    const earthH3 = document.createElement("h3");
    const marsP = document.createElement("p");
    const jupiterP = document.createElement("p");
    mercuryP.append("Your age on Mercury is " + allPlanetAges[1] + " years old.");
    venusP.append("Your age on Venus is " + allPlanetAges[2] + " years old.");
    earthH3.append("Your age on Earth is " + allPlanetAges[0] + " years old.");
    marsP.append("Your age on Mars is " + allPlanetAges[3] + " years old.");
    jupiterP.append("Your age on Jupiter is " + allPlanetAges[4] + " years old.");
    div.append(earthH3);
    div.append(mercuryP);
    div.append(venusP);
    div.append(marsP);
    div.append(jupiterP);
    div.removeAttribute("class");
    document.getElementById("age-form").reset();
  }
}

function getYearsPassed() {
  const error1 = document.getElementById("first-error-message");
  const error2 = document.getElementById("second-error-message");
  const currentAge = document.getElementById("current-age").value;
  const otherAge = document.getElementById("other-age").value;
  error1.setAttribute("class", "hidden");

  if (!currentAge || !otherAge) {
    error2.removeAttribute("class");
  } else {
    error2.setAttribute("class", "hidden");
    const div = document.getElementById("ages-object");
    div.innerText = null;
    const planetYears = new PlanetaryAges(currentAge, otherAge);
    const allPlanetYears = Object.values(planetYears);
    const mercuryP = document.createElement("p");
    const venusP = document.createElement("p");
    const earthH3 = document.createElement("h3");
    const marsP = document.createElement("p");
    const jupiterP = document.createElement("p");
    mercuryP.append(allPlanetYears[1] + " Mercury years have passed.");
    venusP.append(allPlanetYears[2] + " Venus years have passed.");
    earthH3.append(allPlanetYears[0] + " Earth years have passed.");
    marsP.append(allPlanetYears[3] + " Mars years have passed.");
    jupiterP.append(allPlanetYears[4] + " Jupiter years have passed.");
    div.append(earthH3);
    div.append(mercuryP);
    div.append(venusP);
    div.append(marsP);
    div.append(jupiterP);
    div.removeAttribute("class");
    document.getElementById("age-form").reset();
  }
}

function getFutureYears() {
  const error1 = document.getElementById("first-error-message");
  const error2 = document.getElementById("second-error-message");
  const currentAge = document.getElementById("current-age").value;
  const otherAge = document.getElementById("other-age").value;
  error1.setAttribute("class", "hidden");

  if (!currentAge || !otherAge) {
    error2.removeAttribute("class");
  } else {
    error2.setAttribute("class", "hidden");
    const div = document.getElementById("ages-object");
    div.innerText = null;
    const planetYears = new YearsToCome(currentAge, otherAge);
    const allPlanetYears = Object.values(planetYears);
    const mercuryP = document.createElement("p");
    const venusP = document.createElement("p");
    const earthH3 = document.createElement("h3");
    const marsP = document.createElement("p");
    const jupiterP = document.createElement("p");
    mercuryP.append(allPlanetYears[1] + " Mercury years have yet to pass.");
    venusP.append(allPlanetYears[2] + " Venus years have yet to pass.");
    earthH3.append(allPlanetYears[0] + " Earth years have yet to pass.");
    marsP.append(allPlanetYears[3] + " Mars years have yet to pass.");
    jupiterP.append(allPlanetYears[4] + " Jupiter years have yet to pass.");
    div.append(earthH3);
    div.append(mercuryP);
    div.append(venusP);
    div.append(marsP);
    div.append(jupiterP);
    div.removeAttribute("class");
    document.getElementById("age-form").reset();
  }
}

function resetScreen() {
  const div = document.getElementById("ages-object");
  const error1 = document.getElementById("first-error-message");
  const error2 = document.getElementById("second-error-message");
  div.innerText = null;
  div.setAttribute("class", "hidden");
  error1.setAttribute("class", "hidden");
  error2.setAttribute("class", "hidden");
  document.getElementById("age-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("age-form").addEventListener("submit", getPlanetaryAges);
  document.getElementById("reset-button").addEventListener("click", resetScreen);
  document.getElementById("past-button").addEventListener("click", getYearsPassed);
  document.getElementById("future-button").addEventListener("click", getFutureYears);
});