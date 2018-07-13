(function () {
  'use strict';

  angular.module('micApp', [
      'ngConstants',
      'ngRoute',
      'ngResource'
  ])
  .config([
      '$routeProvider',
      function($routeProvider) {
          $routeProvider
              .when('/', {
                  templateUrl: 'views/contact-form.html',
                  controller: 'ContactFormCtrl'
              });
      }
  ]);
}());
