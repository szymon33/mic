(function () {
  'use strict';

  angular
    .module('micApp')
    .controller('ContactFromCtrl', ContactFromCtrl);

  ContactFromCtrl.$inject = ['$scope', '$http', 'ContactFormsResource', '$window', '$sce'];

  function ContactFromCtrl($scope, $http, ContactFormsResource, $window, $sce) {
    $scope.newContact = {};
    $scope.message = '';
    $scope.errors = [];

    $scope.submit = function(isValid) {
      if (isValid) {
        ContactFormsResource.save({ contact_form: $scope.newContact }, function(resp, headers) {
          $scope.message = '';
          $scope.errors = [];
          popupMsg();
        }, function(reason) {
          var data = reason.data;
          if (angular.isDefined(data)) {
            $scope.message = data.message;
            $scope.errors = data.errors;
          }
        });
      }
    };

    function popupMsg() {
      var msg = '<h4>Hello ' + 
        $scope.newContact.name + 
        ',</h4>We received you contact request. We wil get back to you as soon as possible. Thank you!';
      vex.defaultOptions.className = 'vex-theme-wireframe';
      vex.dialog.alert({ unsafeMessage: msg });
    }
  }
}());
