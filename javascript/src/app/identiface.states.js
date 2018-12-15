(function () {
  'use strict';
  /* global angular */

  angular
    .module('identiface.states')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $urlRouterProvider.rule(function ($injector, $location) {
        var newPath, path = $location.path();
        var hasTrailingSlash = path[path.length - 1] === '/';
        if (hasTrailingSlash) {
          // if last character is slash, return the same url without the slash
          newPath = path.substr(0, path.length - 1);
          return newPath;
        }
        return null;
      });
      $stateProvider
        .state('home', {
          'url': '/',
          'controller': 'WelcomeController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/welcome.html'
        });
      $stateProvider
        .state('story', {
          'url': '/story',
          'controller': 'StoryController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/story.html'
        })
        .state('memorise', {
          'url': '/memorise',
          'controller': 'MemoriseController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/memorise.html',
          'data': {'base' :'/img/faces/', 'mode':'faces'}
          })
         .state('memorisecar', {
          'url': '/memorisecar',
          'controller': 'MemoriseController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/memorisecar.html',
          'data': {'base' :'/img/cars/', 'mode':'cars'}
        })
        .state('select', {
          'url': '/select',
          'controller': 'SelectController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/select.html'
        })
        .state('correct', {
          'url': '/correct',
          'controller': 'ModalController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/correct.html',
          'data': {'base' :'/img/faces/', 'mode':'faces'}
        })
        .state('wrong', {
          'url': '/wrong',
          'controller': 'ModalController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/wrong.html',
          'data': {'base' :'/img/faces/', 'mode':'faces'}
        })
        .state('correctcars', {
          'url': '/correct',
          'controller': 'ModalController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/correct.html',
          'data': {'base' :'/img/cars/', 'mode':'cars'}
        })
        .state('wrongcars', {
          'url': '/wrong',
          'controller': 'ModalController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/wrong.html',
          'data': {'base' :'/img/cars/', 'mode':'cars'}
        })
        .state('end', {
          'url': '/end',
          'controller': 'ModalController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/end.html'
        })
        .state('scores', {
          'url': '/scores',
          'controller': 'ScoreController',
          'controllerAs': 'vm',
          'templateUrl': '/app/html/scores.html'
        });;
  }
})();


