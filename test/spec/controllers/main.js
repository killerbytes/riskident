'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('riskidentApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a model to scope', function () {
    expect(scope.model.type).toBe('info');
  });

  it('should attach a submit to scope', function () {
    expect(typeof scope.submit).toBe('function');
  });

});
