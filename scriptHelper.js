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
   pilotInput = document.queryselector("input[name=pilotName]");
   copilotInput = document.queryselector("input[name=copilotName]");
   fuelLevelInput = document.queryselector("input[name=fuelLevel]");
   cargoLevelInput = document.queryselector("input[name=cargoMass]");
   let document = window.document;
   let pilotStatus = document.querySelector("li[id=pilotStatus]");
   let copilotStatus = document.querySelector("li[id=copilotStatus]");
   list = document.getElementById("faultyItems")
   pilotStatus.innerHTML = `Pilot ${pilot} checked and ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot} checked and ready for launch`;

   if (Number(fuelLevel) < 10000) {
    let faultyItems = document.querySelector("div[id=faultyItems]")
    fuelStatus.innerHTML = `Fuel levels too low for launch`
    launchStatus.innerHTML = `Shuttle not ready for launch`
    launchStatus.style.color = "red"
   }
   if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo mass to high for launch`
    launchStatus.innerHTML = `Shuttle not ready for launch`
    launchStatus.style.color = "red"
   }
   if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel levels adequate for launch`;
    cargoStatus.innerHTML = `Cargo mass adequate for launch`;
    launchStatus.style.color = "green";
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
   }

   return list;
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { return response.json();
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
