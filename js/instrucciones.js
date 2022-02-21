"use strict";

// share button
var btn = document.getElementById("share-button");

if (btn != null) {
  var shareData = {
    title: 'Instrucciones de Casa Lipari',
    text: 'Instrucciones de Casa Lipari',
    url: 'https://tillx.github.io/CasaLipari/instrucciones-es.html'
  };

  btn.onclick = function () {
    navigator.share(shareData);
  };
}