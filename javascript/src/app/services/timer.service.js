(function () {
  'use strict';
  /* global angular */


  angular.module('identiface.services')
    .factory('Timer', function ($interval) {

        function Timer () {
          var vm = this;
          this.start = function (totalSeconds, eachFn, nextFn) {
            var totalMillis = totalSeconds * 1000;
            vm.millis = 0;
            var step = 100;
            var count = totalMillis / step + 1;
            this.timer = $interval(function () {
              vm.millis += step;
              if (vm.millis > totalMillis) {
                nextFn();
              } else {
                var progress = 100.0 * vm.millis / totalMillis;
                eachFn(progress);
              }
            }, step, count);
          };
          this.stop = function () {
            $interval.cancel(this.timer);
          };
          this.elapsed = function () {
            return vm.millis;
          };
        }

        return new Timer();
      });
})();
