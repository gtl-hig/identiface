(function () {
  'use strict';
  /* global angular, console */
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
      var elapsed = Timer.elapsed();
      Game.addScore(elapsed);
      console.log('Solved in ' + elapsed / 1000 +
                  ' sec, score: ' + Game.score + ' points');
      if (Game.level < 4) {
       console.log("correct "+Game.mode);
        if (Game.mode == 'cars'){
        $state.go('correctcars');
        }else{
        $state.go('correct');
        }
        
      } else {
        $state.go('end');
      }
    }

    function wrongAnswer () {
      var elapsed = Timer.elapsed();
      console.log('Wrong in ' + elapsed / 1000 +
                  ' sec, score: ' + Game.score + ' points');
      if (Game.level < 4) { //Length of game
        if (Game.mode == "cars"){
         $state.go('wrongcars');
         }else{
         $state.go('wrong');
         }
      } else {
        $state.go('end');
      }
    }

    function nextLevel () {
      Game.nextLevel();
    }

    function replay () {
      Game.replay();
    }
  }
})();


