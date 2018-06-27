(function () {
  'use strict';

  angular
    .module('micApp')
    .controller('ContactFromCtrl', ContactFromCtrl);

  ContactFromCtrl.$inject = ['$scope', '$http', 'ContactFormsResource'];

  function ContactFromCtrl($scope, $http, ContactFormsResource) {
    $scope.newContact = {};
    $scope.message = '';
    $scope.errors = [];

    $scope.submit = function(isValid) {
      if (isValid) {
        ContactFormsResource.save({ contact_form: $scope.newContact }, function(resp, headers) {
          $scope.message = resp.message;
          $scope.errors = [];
        }, function(reason) {
          var data = reason.data;
          if (angular.isDefined(data)) {
            $scope.message = data.message;
            $scope.errors = data.errors;
          }
        });
      }
    };
  }
}());
