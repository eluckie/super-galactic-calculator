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
  const earth = planetAges.earthYears;
  const mercury = planetAges.mercuryYears;
  const venus = planetAges.venusYears;
  const mars = planetAges.marsYears;
  const jupiter = planetAges.jupiterYears;
  document.getElementById("mercury-years").innerText = mercury;
  document.getElementById("venus-years").innerText = venus;
  document.getElementById("earth-years").innerText = earth;
  document.getElementById("mars-years").innerText = mars;
  document.getElementById("jupiter-years").innerText = jupiter;
}

window.addEventListener("load", function() {
  document.getElementById("age-form").addEventListener("submit", getPlanetaryAges);
});