import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PlanetaryAges from "./js/planetary-ages.js";
// import YearsToCome from "./future-bday.js";

function getPlanetaryAges(event) {
  event.preventDefault();
  const div = document.getElementById("ages-object");
  div.innerText = null;
  const currentAge = document.getElementById("current-age").value;
  const otherAge = document.getElementById("other-age").value;
  const planetAges = new PlanetaryAges(currentAge, otherAge);
  const allPlanetAges = Object.values(planetAges);
  const mercuryP = document.createElement("p");
  const venusP = document.createElement("p");
  const earthP = document.createElement("p");
  const marsP = document.createElement("p");
  const jupiterP = document.createElement("p");
  mercuryP.append("Your age on Mercury is " + allPlanetAges[1] + " years");
  venusP.append("Your age on Venus is " + allPlanetAges[2] + " years");
  earthP.append("Your age on Earth is " + allPlanetAges[0] + " years");
  marsP.append("Your age on Mars is " + allPlanetAges[3] + " years");
  jupiterP.append("Your age on Jupiter is " + allPlanetAges[4] + " years");
  div.append(mercuryP);
  div.append(venusP);
  div.append(earthP);
  div.append(marsP);
  div.append(jupiterP);
  div.removeAttribute("class");
  document.getElementById("age-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("age-form").addEventListener("submit", getPlanetaryAges);
});