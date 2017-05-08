'use strict';

describe('Directive: notification', function () {

  // load the directive's module
  beforeEach(module('riskidentApp'));
  beforeEach(module('foo'));

  var element,
    template,
    scope;

  beforeEach(inject(function ($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();

  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<notification></notification>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.html()).toContain('<div class="notification-item" ng-class="item.type">');
  //
  }));
});
