"use strict";

window.onload = function () {
	console.log("testing 1 2 3");

	var menu = document.getElementById("menu-button");
	if (menu != null) {
		var nav = document.getElementById("navigation");
		var newLeft = "-400px";
		menu.onclick = function () {
			if (newLeft == "-400px") {
				newLeft = "0px";
			} else {
				newLeft = "-400px";
			}
			nav.style.left = newLeft;
		};
	}
};