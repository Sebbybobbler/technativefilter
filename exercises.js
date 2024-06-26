var planets = [
  {
    name: "Mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
  },
  {
    name: "Venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
  },
  {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
  },
  {
    name: "Mars",
    circumference: "227,000,000km",
    distanceFromSun: "21,000km",
  },
  {
    name: "Jupiter",
    circumference: "779,000,000km",
    distanceFromSun: "440,000km",
  },
  {
    name: "Saturn",
    circumference: "1,430,000,000km",
    distanceFromSun: "365,000km",
  },
  {
    name: "Uranus",
    circumference: "2,880,000,000km",
    distanceFromSun: "160,000km",
  },
  {
    name: "Neptune",
    circumference: "4,500,000,000km",
    distanceFromSun: "154,000km",
  },
];
function addPlanetToPage(planet) {
  // create a div element for the planet
  var planetElement = document.createElement("div");
  planetElement.classList.add("planet");
  planetElement.classList.add("planet-" + planet.name);

  // add the planet name
  var planetName = document.createElement("p");
  planetName.classList.add("planet-name");
  planetName.textContent = planet.name;
  planetElement.appendChild(planetName);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
  // add other planet details
  var planetCircumference = document.createElement("p");
  planetCircumference.classList.add("planet-circumference");
  planetCircumference.textContent = "Circumference: " + planet.circumference;
  planetElement.appendChild(planetCircumference);
}
planets.forEach(addPlanetToPage);

// listen to changes in the search form
var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
var searchValue = "";

// check what search term has been entered
function updateSearchValue() {
    // trim() removes any spaces before/after the input
    // toLowerCase() makes the entered text lowercase
    searchValue = searchInput.value.trim().toLowerCase();

    console.log("You searched for: " + searchValue);

     // loop through all planet elements
    // show or hide each one based on the search term
    var planetElements = document.querySelectorAll(".planet");
    planetElements.forEach(showOrHidePlanet);
}
    // every time the text field changes, run this
function showOrHidePlanet(planetElement) {
    // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");
    } else {
            // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");

    // if a search term has been set,
    // only display the planet if its name matches the search term
    } else {

        // get the name of the planet from its planet-name element
        var planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
        if (planetName.includes(searchValue)) {
            planetElement.classList.remove("hide");
        } else {
            planetElement.classList.add("hide");
        }
    }
    }
}
