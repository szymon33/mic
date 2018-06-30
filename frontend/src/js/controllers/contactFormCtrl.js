(function () {
  'use strict';

  angular
    .module('micApp')
    .controller('ContactFromCtrl', ContactFromCtrl);

  ContactFromCtrl.$inject = ['$scope', '$http', 'ContactFormsResource'];

  function ContactFromCtrl($scope, $http, ContactFormsResource) {
    init($scope);
    $scope.submit = function(isValid) {
      var storedName = $scope.newContact.name;
      if (isValid) {
        ContactFormsResource.save({ contact_form: $scope.newContact }, function(resp, headers) {
          resetForm($scope);
          popupMsg(storedName);
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

  function init(scope) {
    scope.newContact = {};
    scope.message = '';
    scope.errors = [];
  }

  function resetForm(scope) {
    init(scope);
    scope.contactForm.$setPristine();
  }

  function popupMsg(name) {
    var msg = '<h4>Hello ' + 
      name + 
      ',</h4>We received you contact request. We wil get back to you as soon as possible. Thank you!';
    vex.defaultOptions.className = 'vex-theme-wireframe';
    vex.dialog.alert({ unsafeMessage: msg });
  }
}());
