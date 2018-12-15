(function () {
  'use strict';
  /* global angular */

  angular
    .module('identiface', [
      'ui.bootstrap',
      'pascalprecht.translate',
      'ngSanitize',
      'identiface.authentication',
      'identiface.config',
      'identiface.controllers',
      'identiface.directives',
      'identiface.services',
      'identiface.states',
      'identiface.utils'
    ]);

  angular
    .module('identiface.authentication', ['ngCookies']);

  angular
    .module('identiface.config', []);

  angular
    .module('identiface.controllers', []);

  angular
    .module('identiface.directives', []);

  angular
    .module('identiface.services', []);

  angular
    .module('identiface.states', ['ui.router']);

  angular
    .module('identiface.utils', []);

  angular
    .module('identiface')
    .run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]);

})();
