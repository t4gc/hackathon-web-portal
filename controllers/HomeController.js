$(document).ready(function () {
  HomeController.initialize();
});

let HomeController = (function () {

  function initialize() {
    console.log('Welcome to HomeController!');
  }

  return {
    initialize: initialize
  }
})();