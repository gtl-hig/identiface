(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('ModalController', ModalController);

  function ModalController ($scope, $state, $uibModal, Game, Timer) {
    var vm = this;
    vm.color = Game.color;
    vm.mode = Game.mode;
    vm.level = Game.level;
    vm.initial = Game.learn;
    vm.correct = Game.correctChoice;
    vm.nextLevel = nextLevel;
    vm.replay = replay;
    vm.score = Game.score;
    vm.scores = scores;
    vm.levelsnr = Game.levelsnr;
    $scope.scorename = "Name";
    

    function nextLevel () {
      Game.nextLevel();
    }
    
   function scores () {
      Game.scorename = $scope.scorename;
      Game.scores();
    }

    function replay () {
      Game.replay();
    }

  }
})();


