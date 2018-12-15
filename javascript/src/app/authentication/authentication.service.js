(function () {
  'use strict';
  /* global angular, _ */
  angular
    .module('identiface.authentication')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$rootScope', '$cookies', '$location'];
  function Authentication ($rootScope, $cookies, $location) {
    var instance = {
      'getProfile': getProfile,
      'getEmail': getEmail,
      'hasRole': hasRole,
      'isAuthenticated': isAuthenticated,
      'root': root,
      'setAuthenticatedProfile': setAuthenticatedProfile,
      'unauthenticate': unauthenticate
    };
    var current = getProfile();
    if (current === null) {
      $location.url('/login');
    }

    return instance;

    function getProfile () {
      var profile = $cookies.getObject('profile');
      if (!profile) {
        return null;
      }
      return profile;
    }

    function getEmail () {
      if (!isAuthenticated()) return null;
      var profile = getProfile();
      return profile.email;
    }

    function hasRole (role) {
      var profile = getProfile();
      var match = _.find(profile.roles, function (r) {
        return r === role;
      });
      if (!isAuthenticated()) {
        return false;
      }
      if (match) {
        return true;
      }
      return false;
    }

    function isAuthenticated () {
      return !!$cookies.getObject('profile');
    }

    function setAuthenticatedProfile (profile) {
      $cookies.putObject('profile', profile);
      $rootScope.$broadcast('loggedIn');
    }

    function root () {
      return '/';
    }

    function unauthenticate () {
      $cookies.remove('profile');
    }
  }
})();

