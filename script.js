// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let missionTarget = document.getElementById("missionTarget");
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let moons = planet.moons;
       let imageUrl = planet.image;
   
   addDestinationInfo(
    window.document,
    name,
    diameter,
    star,
    distance,
    moons,
    imageURL
   );
    })
   
    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.queryselector("input[name=pilotName]");
        let copilotInput = document.queryselector("input[name=copilotName]");
        let fuelLevelInput = document.queryselector("input[name=fuelLevel]");
        let cargoLevelInput = document.queryselector("input[name=cargoMass]");
        let document = window.document;
        let pilotStatus = document.querySelector("li[id=pilotStatus]");
        let copilotStatus = document.querySelector("li[id=copilotStatus]");
        
        let list = document.getElementById("div[id=faultyItems]")
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    })
});