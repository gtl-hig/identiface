(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('SelectController', SelectController);

  function SelectController ($scope, $state, $uibModal, Game, Timer) {
    var vm = this;
    vm.color = Game.color;
    vm.base = Game.base;
    vm.mode = Game.mode;
    vm.level = Game.level;
    vm.initial = Game.learn;
    vm.choices = Game.choices;
    vm.correct = Game.correctChoice;

    if (!vm.initial) $state.go('home');

    vm.trigger = trigger;
    vm.triggered = false;
    vm.replay = replay;
    vm.nextLevel = nextLevel;
    vm.timerActive = true;

    Timer.start(Game.seconds, onEachTick, onTimerEnd);

    function onEachTick (progress) {
      if (vm.timerActive)
        vm.progress = progress;
      else
        vm.progress = 100;
    }

    function onTimerEnd () {
      vm.trigger();
    }

    function trigger (index) {
      Timer.stop();
      if (!vm.triggered) {
        vm.triggered = true;
        if (typeof index !== 'undefined') {
          vm.chosen = vm.choices[index];
          if (vm.chosen === vm.correct) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        } else {
          wrongAnswer();
        }
      }
    }

    function correctAnswer () {
      console.log('Solved in ' + Timer.elapsed() / 1000 + ' sec, score: ' + Timer.points() + ' points');
      var options = {
        'scope': $scope,
        'templateUrl': '/app/html/modal-correct.html'
      };
      vm.modal = $uibModal.open(options);
      vm.modal.result
        .catch(onCorrectModalDismiss);
    }

    function wrongAnswer () {
      var options = {
        'scope': $scope,
        'templateUrl': '/app/html/modal-wrong.html'
      };
      vm.modal = $uibModal.open(options);
      vm.modal.result
        .catch(onWrongModalDismiss);
    }

    function onCorrectModalDismiss () {
      Game.nextLevel();
    }

    function onWrongModalDismiss () {
      Game.replay();
    }


    function nextLevel () {
      if (vm.modal) {
        vm.modal.close();
      }
      Game.nextLevel();
    }

    function replay () {
      if (vm.modal) {
        vm.modal.close();
      }
      Game.replay();
    }
  }
})();


