(function () {
  'use strict';
  /* global angular, console */
  angular
    .module('identiface.controllers')
    .controller('MemoriseController', MemoriseController);

  function MemoriseController ($scope, $state, $interval, Game, Timer) {
    var vm = this;
    vm.trigger = trigger;
    vm.level = Game.level;
    vm.mode = Game.mode;
    Game.newGame(Game.level);
    vm.learn = Game.learn;
    vm.color = Game.color;
    Timer.start(Game.seconds, onEachTick, onTimerEnd);

    function trigger () {
      Timer.stop();
      var elapsed = Timer.elapsed();
      Game.addScore(elapsed);
      console.log('Memorised in ' + elapsed / 1000 +
                  ' sec, score: ' + Game.score + ' points');
      $state.go('select');
    }

    function onEachTick (progress) {
      vm.progress = progress;
    }

    function onTimerEnd () {
      vm.trigger();
    }
  }
})();


