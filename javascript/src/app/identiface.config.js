/* global angular */
(function () {
  'use strict';

  angular
    .module('identiface.config')
    .config(config);

  config.$inject = ['$locationProvider'];

  function config ($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
})();

