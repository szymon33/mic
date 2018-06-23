(function () {
  'use strict';

  angular
    .module('micApp')
    .controller('ContactFromCtrl', ['$scope', ContactFromCtrl]);

  function ContactFromCtrl($scope) {
    $scope.message = "Hello here!";
  }
}());
