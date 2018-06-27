(function () {
  'use strict';

  angular
    .module('micApp')
    .controller('ContactFromCtrl', ['$scope', ContactFromCtrl]);

  function ContactFromCtrl($scope) {
    $scope.newContact = {};
    $scope.message = '';
    $scope.error = '';

    $scope.submit = function(isValid) {
      if (isValid) {
        console.log('here');
      }
    };
  }
}());
