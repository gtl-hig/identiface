(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('LanguageController', LanguageController);

  function LanguageController ($translate) {
    var vm = this;
    vm.setLanguage = setLanguage;

    vm.languages = [
      {'code': 'en',
       'icon': 'https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/United-Kingdom_flat.png'},
      {'code': 'es',
       'icon': 'https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/Spain_flat.png'},
      {'code': 'it',
       'icon': 'https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/Italy_flat.png'},
      {'code': 'ro',
       'icon': 'https://cdn2.iconfinder.com/data/icons/flags_gosquared/48/Romania_flat.png'}
    ];

    function setLanguage (language) {
      $translate.use(language.code);
    }

  }
})();


