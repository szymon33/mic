describe('ContactFormCtrl', function() {
  beforeEach(module('micApp'));

  var controller, ContactFormsResource, $scope, $http;

  beforeEach(inject(function($rootScope, $http, $controller){
    ContactFormsResource = {
      save: function() {}
    };

    spyOn(ContactFormsResource, 'save').and.returnValue("Foo");
    $scope = $rootScope.$new();

    controller = $controller('ContactFormCtrl', { $scope: $scope, $http: $http, ContactFormsResource: ContactFormsResource });
  }));

  it('should have correct name', function() {
    expect($scope.name).toEqual('ContactFormCtrl');
  });
});
