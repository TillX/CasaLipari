"use strict";

/*
*** SITIOS DE INTERES ***
*/

//check if map exists
var map = document.getElementById("map");
if (map != null) {
  var GetMap = function GetMap() {
    bingMap = new Microsoft.Maps.Map('#map', {
      showLocateMeButton: false,
      showMapTypeSelector: false
    });
    var loc = new Microsoft.Maps.Location(lipariLat, lipariLng);
    bingMap.setView({
      center: loc,
      zoom: 16
    });
    var pin = new Microsoft.Maps.Pushpin(loc, {
      title: "Casa Lipari",
      color: 'red'
    });
    bingMap.entities.push(pin);
  }; // set map route
  var viewMapRoute = function viewMapRoute(pointData) {
    // check for real data set
    if (pointData.coordsLat != undefined) {
      //Clear map
      bingMap.entities.clear();
      if (directionsManager != undefined) {
        directionsManager.clearAll();
      }

      //Load the directions module.
      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(bingMap);

        //Create waypoints to route between.
        var initialWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: 'Casa Lipari',
          location: new Microsoft.Maps.Location(lipariLat, lipariLng)
        });
        directionsManager.addWaypoint(initialWaypoint);
        var finalWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: pointData.locationName,
          location: new Microsoft.Maps.Location(pointData.coordsLat, pointData.coordsLng)
        });
        directionsManager.addWaypoint(finalWaypoint);

        //Specify the element in which the itinerary will be rendered.
        directionsManager.setRenderOptions({
          itineraryContainer: '#directionsItinerary'
        });

        //Calculate directions.
        directionsManager.calculateDirections();
      });
    }
  }; //get map markers
  // Create map
  var bingMap;
  var directionsManager;
  var lipariLat = 19.456860573001162;
  var lipariLng = -99.18836544350118;
  var sitesList = document.getElementById("maps-list");

  //when click
  sitesList.onclick = function (e) {
    if (bingMap != undefined) {
      //check if only hover on li items
      if (e.target.classList.contains("maps-list__item")) {
        viewMapRoute(e.target.dataset);
      }
    }
  };
}

//check load
window.onload = function () {};
function svgOver(element) {
  element.children[0].children[0].children[0].classList.remove("svg-colors");
  // element.children[0].children[0].children[1].classList.remove("svg-outline");
}
function svgOut(element) {
  element.children[0].children[0].children[0].classList.add("svg-colors");
  // element.children[0].children[0].children[1].classList.add("svg-outline");
}