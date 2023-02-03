// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PlanetaryAges from "./js/planetary-ages.js";
// import YearsToCome from "./future-bday.js";

function getPlanetaryAges(event) {
  event.preventDefault();
  const error = document.getElementById("error-message");
  const currentAge = document.getElementById("current-age").value;

  if (!currentAge) {
    error.removeAttribute("class");
  } else {
    error.setAttribute("class", "hidden");
    const div = document.getElementById("ages-object");
    div.innerText = null;
    const currentAge = document.getElementById("current-age").value;
    const otherAge = document.getElementById("other-age").value;
    const planetAges = new PlanetaryAges(currentAge, otherAge);
    const allPlanetAges = Object.values(planetAges);
    const mercuryP = document.createElement("p");
    const venusP = document.createElement("p");
    const earthH3 = document.createElement("h4");
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

function resetScreen() {
  const div = document.getElementById("ages-object");
  const error = document.getElementById("error-message");
  div.innerText = null;
  div.setAttribute("class", "hidden");
  error.setAttribute("class", "hidden");
  document.getElementById("age-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("age-form").addEventListener("submit", getPlanetaryAges);
  document.getElementById("reset-button").addEventListener("click", resetScreen);
});