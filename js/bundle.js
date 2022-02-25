"use strict";

window.onload = function () {
  /*
  *** HEADER ***
  */
  //check for the header
  var header = document.getElementById("main-header-bg");

  if (header != null) {
    var nextBackground = function nextBackground() {
      currentBG++;
      currentBG = currentBG % backgrounds.length;
      header.style.backgroundImage = backgrounds[currentBG];
    };

    var backgrounds = new Array('url(./images/01-header-bg-1.jpg)', 'url(./images/01-header-bg-2.jpg)', 'url(./images/01-header-bg-3.jpg)');
    var currentBG = 0;
    setInterval(nextBackground, 20000);
    header.style.backgroundImage = backgrounds[0];
  }
  /*
  *** NAVIGATION ***
  */
  // //check for the menu button
  // var menu = document.getElementById("menu-button");
  // if(menu != null){
  //
  //   //get nav bar
  // 	var nav = document.getElementById("navigation");
  // 	var navStyles = getComputedStyle(nav)
  //   var baseLeft = "-" + navStyles["width"];
  // 	var newLeft = baseLeft;
  //
  // 	//get menu icon animations
  // 	var line1_anim_open = document.getElementById("line_1-animation-open");
  // 	var line1_anim_close = document.getElementById("line_1-animation-close");
  //
  // 	var line2_anim_open = document.getElementById("line_2-animation-open");
  // 	var line2_anim_close = document.getElementById("line_2-animation-close");
  //
  // 	var line3_anim_open = document.getElementById("line_3-animation-open");
  // 	var line3_anim_close = document.getElementById("line_3-animation-close");
  //
  //
  //   menu.onclick = function(){
  // 		if(newLeft == baseLeft){
  // 			newLeft = "0px";
  // 			line1_anim_open.beginElement();
  // 			line2_anim_open.beginElement();
  // 			line3_anim_open.beginElement();
  // 		} else {
  // 			newLeft = baseLeft;
  // 			line1_anim_close.beginElement();
  // 			line2_anim_close.beginElement();
  // 			line3_anim_close.beginElement();
  // 		}
  //     nav.style.left = newLeft;
  //   }
  //
  //   // get links on navigation
  //   var navLinks = nav.getElementsByClassName('navigation__link');
  //
  //   //get current page (2 methods)
  //   var currentURL1 = window.location.href;
  //   var currentURL2 = document.URL;
  //
  //   // apply style to current link
  //   for (var i = 0; i < navLinks.length; i++) {
  //     if(navLinks[i].href == currentURL1 || navLinks[i].href == currentURL2){
  //       navLinks[i].classList.add("-current-page");
  //     }
  //   }
  //
  // }

  /*
  *** DESCRIPCION DE LAS TARJETAS DEL INDEX ***
  */
  //check for the description text


  var descriptionText = document.getElementById("card-description");

  if (descriptionText != null) {
    // get cards
    var cardWifi = document.getElementById("card-wifi");
    var cardRules = document.getElementById("card-rules");
    var cardComp = document.getElementById("card-computer");
    var cardSites = document.getElementById("card-sites"); // reset text

    descriptionText.innerHTML = ""; // put text and visible class on hover

    cardWifi.onmouseover = function () {
      descriptionText.innerHTML = "Nombre de la Red: CasaLipari <br>Password:password000casa000lipari";
      descriptionText.classList.add("-visible-description");
    };

    cardRules.onmouseover = function () {
      descriptionText.innerHTML = "Les pedimos por favor que lean cuidadosamente las siguientes instrucciones y nos comuniquen cualquier duda que pueda presentarse.";
      descriptionText.classList.add("-visible-description");
    };

    cardComp.onmouseover = function () {
      descriptionText.innerHTML = "Guía rápida de uso de la computadora y el software instalado.";
      descriptionText.classList.add("-visible-description");
    };

    cardSites.onmouseover = function () {
      descriptionText.innerHTML = "Algunos sitios cercanos al departamento que pueden ayudar. Restaurantes, tiendas de servicio, sitios turísticos y otros recursos útiles.";
      descriptionText.classList.add("-visible-description");
    }; // Reset visibility


    cardWifi.onmouseleave = function () {
      descriptionText.classList.remove("-visible-description");
    };

    cardRules.onmouseleave = function () {
      descriptionText.classList.remove("-visible-description");
    };

    cardComp.onmouseleave = function () {
      descriptionText.classList.remove("-visible-description");
    };

    cardSites.onmouseleave = function () {
      descriptionText.classList.remove("-visible-description");
    };
  }
  /*
  *** COMPUTADORA MOUSE ***
  */
  // var mouseList = document.getElementById("computadora-mouse__list");
  // if(mouseList != null){
  //
  // 	//get all mask elements
  // 	var clickIzquierdo = document.getElementById("mask-click-izquierdo");
  // 	var clickDerecho = document.getElementById("mask-click-derecho");
  // 	var desplazamiento = document.getElementById("mask-desplazamiento");
  // 	var missionControl = document.getElementById("mask-mission-control");
  //
  // 	function resetMasks(){
  // 		clickIzquierdo.style.opacity = 0;
  // 		clickDerecho.style.opacity = 0;
  // 		desplazamiento.style.opacity = 0;
  // 		missionControl.style.opacity = 0;
  // 	}
  //
  // 	//when hover mouse
  // 	mouseList.onmouseover = function(e) {
  //
  // 		//check if only hover on li items
  // 		if(e.target.classList.contains("computadora-mouse__actions-item")){
  //
  // 			resetMasks();
  //
  // 			// get text of current computadora__teclado-item
  // 			var currentMouseItem = e.target.innerHTML.toLowerCase();
  //
  // 			switch (currentMouseItem) {
  // 				case "click izquierdo":
  // 					clickIzquierdo.style.opacity = 1;
  // 					break;
  // 				case "click derecho":
  // 					clickDerecho.style.opacity = 1;
  // 					break;
  // 				case "desplazamiento del raton":
  // 					desplazamiento.style.opacity = 1;
  // 					break;
  // 				case "mission control":
  // 					missionControl.style.opacity = 1;
  // 					break;
  // 				default:
  // 			}
  // 		//>check element has class of computadora__teclado-item
  // 	} else {
  // 		resetMasks();
  // 	}
  // 	//>on mouse over
  // 	}
  //
  // 	// when mouse leave list
  // 	mouseList.onmouseleave = function(e) {
  // 		resetMasks();
  // 	}
  //
  // }

  /*
  *** COMPUTADORA TECLADO ***
  */
  // //checar si estamos en la pagina correcta
  // var keyboardList = document.getElementById("computadora__teclado-list");
  // if(keyboardList != null){
  //
  // 	//get all the mask elements
  // 	var maskCut = document.getElementById("mask-cut");
  // 	var maskCopy = document.getElementById("mask-copy");
  // 	var maskPaste = document.getElementById("mask-paste");
  // 	var maskArroba = document.getElementById("mask-arroba");
  // 	var maskCapturaCompleta = document.getElementById("mask-captura-completa");
  // 	var maskCapturaSeccion = document.getElementById("mask-captura-seccion");
  // 	var maskCambiarProgramas = document.getElementById("mask-cambiar-programas");
  // 	var maskSpotlight = document.getElementById("mask-spotlight");
  // 	var maskCerrarAplicacion = document.getElementById("mask-cerrar-aplicacion");
  // 	var maskCerrarVentana = document.getElementById("mask-cerrar-ventana");
  // 	var maskMinimizar = document.getElementById("mask-minimizar");
  //
  // 	var explanationString = "";
  //
  // 	function resetMasks(){
  // 		//reset masks to 0
  // 		maskCut.style.opacity = 0;
  // 		maskCopy.style.opacity = 0;
  // 		maskPaste.style.opacity = 0;
  // 		maskArroba.style.opacity = 0;
  // 		maskCapturaCompleta.style.opacity = 0;
  // 		maskCapturaSeccion.style.opacity = 0;
  // 		maskCambiarProgramas.style.opacity = 0;
  // 		maskSpotlight.style.opacity = 0;
  // 		maskCerrarAplicacion.style.opacity = 0;
  // 		maskCerrarVentana.style.opacity = 0;
  // 		maskMinimizar.style.opacity = 0;
  // 		setExplanationString()
  // 	}
  // 	function setExplanationString(){
  // 		document.getElementsByClassName("computadora__teclado-explanation")[0].innerHTML = explanationString;
  // 	}
  //
  // 	//when hover mouse
  // 	keyboardList.onmouseover = function(e) {
  //
  // 		//check if only hover on li items
  // 		if(e.target.classList.contains("computadora__teclado-item")){
  //
  // 			resetMasks();
  //
  // 			// get text of current computadora__teclado-item
  // 			var currentKeyboardItem = e.target.innerHTML.toLowerCase();
  //
  // 			switch (currentKeyboardItem) {
  // 				case "cortar":
  // 					maskCut.style.opacity = 1;
  // 					break;
  // 				case "copiar":
  // 					maskCopy.style.opacity = 1;
  // 					break;
  // 				case "pegar":
  // 					maskPaste.style.opacity = 1;
  // 					break;
  // 				case "arroba":
  // 					maskArroba.style.opacity = 1;
  // 					break;
  // 				case "captura de pantalla completa":
  // 					maskCapturaCompleta.style.opacity = 1;
  // 					break;
  // 				case "captura de pantalla seleccion":
  // 					maskCapturaSeccion.style.opacity = 1;
  // 					break;
  // 				case "cambiar programas":
  // 					maskCambiarProgramas.style.opacity = 1;
  // 					break;
  // 				case "spotlight":
  // 					maskSpotlight.style.opacity = 1;
  // 					explanationString = "Barra de busqueda y funciones de la computadora."
  // 					break;
  // 				case "cerrar aplicacion":
  // 					maskCerrarAplicacion.style.opacity = 1;
  // 					break;
  // 				case "cerrar ventana o pestaña":
  // 					maskCerrarVentana.style.opacity = 1;
  // 					break;
  // 				case "minimizar ventana":
  // 					maskMinimizar.style.opacity = 1;
  // 					explanationString = "Las ventanas minimizadas se pueden encontrar en la barra inferior de la pantalla.";
  // 					break;
  // 				default:
  // 			}
  // 		//>check element has class of computadora__teclado-item
  // 	} else {
  // 		explanationString = "";
  // 		resetMasks();
  // 	}
  // 		setExplanationString();
  // 	//>on mouse over
  // 	}
  //
  // 	// when mouse leave list
  // 	keyboardList.onmouseleave = function(e) {
  // 		explanationString = "";
  // 		resetMasks();
  // 	}
  //
  // //>check for list
  // }

  /*
  *** IMAGEN DEL TECLADO ***
  */
  //track keyboard image
  // 	var keyboardImage = document.getElementsByClassName("computadora__teclado-image")[0];
  //
  // 	//check if keyboard image exists
  // 	if(keyboardImage != null){
  //
  // 		window.addEventListener("wheel", event => {
  //
  // 			var pageScroll = window.pageYOffset;
  //
  // 			var firstMove = 780;
  // 			var lastMove = 1114;
  //
  // 			if(pageScroll < firstMove){
  // 				keyboardImage.style.top = "0";
  // 			}
  //
  // 			if(pageScroll >= firstMove && pageScroll <= lastMove){
  // 				var newTop = pageScroll-firstMove;
  // 				keyboardImage.style.top = newTop+"px";
  // 			}
  //
  // 			if(pageScroll >= lastMove) {
  // 				keyboardImage.style.top = lastMove-firstMove + "px";
  // 			}
  //
  // 		});
  //
  // }

};
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
      } //Load the directions module.


      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(bingMap); //Create waypoints to route between.

        var initialWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: 'Casa Lipari',
          location: new Microsoft.Maps.Location(lipariLat, lipariLng)
        });
        directionsManager.addWaypoint(initialWaypoint);
        var finalWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: pointData.locationName,
          location: new Microsoft.Maps.Location(pointData.coordsLat, pointData.coordsLng)
        });
        directionsManager.addWaypoint(finalWaypoint); //Specify the element in which the itinerary will be rendered.

        directionsManager.setRenderOptions({
          itineraryContainer: '#directionsItinerary'
        }); //Calculate directions.

        directionsManager.calculateDirections();
      });
    }
  }; //get map markers


  // Create map
  var bingMap;
  var directionsManager;
  var lipariLat = 19.456860573001162;
  var lipariLng = -99.18836544350118;
  var sitesList = document.getElementById("maps-list"); //when click

  sitesList.onclick = function (e) {
    if (bingMap != undefined) {
      //check if only hover on li items
      if (e.target.classList.contains("maps-list__item")) {
        viewMapRoute(e.target.dataset);
      }
    }
  };
}