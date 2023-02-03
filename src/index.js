import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PlanetaryAges from "./js/planetary-ages.js";
// import YearsToCome from "./future-bday.js";

function getPlanetaryAges(event) {
  event.preventDefault();
  const currentAge = document.getElementById("current-age").value;
  const otherAge = document.getElementById("other-age").value;
  const planetAges = new PlanetaryAges(currentAge, otherAge);
  console.log(planetAges);
}

window.addEventListener("load", function() {
  document.getElementById("age-form").addEventListener("submit", getPlanetaryAges);
});