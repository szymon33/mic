(function () {
  'use strict';

  angular.module('micApp', [
      'ngRoute'
  ])
  .config([
      '$routeProvider',
      function($routeProvider) {
          $routeProvider
              .when('/', {
                  templateUrl: 'views/contact-form.html',
                  controller: 'ContactFromCtrl'
              });
      }
  ]);
}());
