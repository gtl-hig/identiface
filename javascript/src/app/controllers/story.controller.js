(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('StoryController', StoryController);

  function StoryController ($state, Game) {
    var vm = this;
    vm.playface = function () {
      Game.level = 1;
      Game.mode = "faces";
      $state.go('memorise');
    }
    vm.playcar = function () {
      Game.level = 1;
      Game.mode = "cars";
      $state.go('memorisecar');
    }
  }
})();


