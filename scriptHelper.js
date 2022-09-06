// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === "") {
      return "Empty";
    } else if (isNaN(testInput)) {
      return "Not a number";
    } else if (testInput.type === Number) {
      return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let copilotStatus = document.querySelector("li[id=copilotStatus]");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let cargoMass = document.querySelector("input[name=cargoMass]");
  let pilotStatus = document.querySelector("li[id=pilotStatus]");
  let fuelStatus = document.querySelector("li[id=fuelStatus]")
  let cargoStatus = document.querySelector("li[id=cargoStatus]")
  let launchStatus = document.querySelector("h2[id=launchStatus]");

  list.style.visibility = "visible";
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  //  pilotName = document.queryselector("input[name=pilotName]");
  //  copilotName = document.queryselector("input[name=copilotName]");
  //  fuelStatus = document.queryselector("input[name=fuelLevel]");
  //  cargoStatus = document.queryselector("input[name=cargoMass]");
  //  let document = window.document;
  //  let pilotStatus = document.querySelector("li[id=pilotStatus]");
  //  let copilotStatus = document.querySelector("li[id=copilotStatus]");
  //  list = document.getElementById("faultyItems")
  //  pilotStatus.innerHTML = `Pilot ${pilot} checked and ready for launch`;
  //  copilotStatus.innerHTML = `Co-pilot ${copilot} checked and ready for launch`;
  const COLOR_GREEN = "rgb(65, 159, 106)";
  const COLOR_RED = "rgb(199, 37, 78)";

   if (Number(fuelLevel) < 10000) {
    let faultyItems = document.querySelector("div[id=faultyItems]")
    list.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel level too low for launch`
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
    launchStatus.style.color = COLOR_RED
   }
   if (Number(cargoLevel) > 10000) {
    list.style.visibility = "visible"
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
    launchStatus.style.color = COLOR_RED
   }
   if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    launchStatus.style.color = COLOR_GREEN;
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
   }

   return list;
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
      return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) { let Index = (Math.floor(Math.random()*planets.length))
  return planets[Index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
