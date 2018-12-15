(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('WelcomeController', WelcomeController);

  function WelcomeController ($state, Game) {
    var vm = this;
    vm.play = function () {
      Game.level = 1;
      $state.go('story');
    }
  }
})();


