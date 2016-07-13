/* globals testUtils */
describe('Service: ConfigurationTest', function () {
  'use strict';

  var scope, ConfigurationTestService;

  testUtils().testSetup({
    'moduleName': 'ConfigurationTestModule',
    'translations': {
      'ConfigurationTest': {
        'name': {
          'first': 'Luke'
        }
      }
    }
  });

  beforeEach(inject(function ($rootScope, _ConfigurationTestService_) {
    scope = $rootScope;
    ConfigurationTestService = _ConfigurationTestService_;
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should correctly say hello', function () {
    expect(ConfigurationTestService.sayHello()).toEqual('hello Luke');
  });
});
