/**
 * ConfigurationTest
 * @version v0.0.1 - 2016-07-13
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('ConfigurationTestModule', ['pascalprecht.translate'])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

    $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'ConfigurationTest': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();
    }])
    .factory('ConfigurationTestService', ['$window', '$location', function($window, $location){
            'use strict';

            var sendPageView = function() {
                if ($window.ga) {
                    $window.ga('send', 'pageview', { page: $location.url() });
                }
            };

            var sendEventTracking = function(activityRecord){
                if ($window.ga) {
                    $window.ga('send', activityRecord);
                }
            };

            return {
                sendPageView: sendPageView,
                sendEventTracking: sendEventTracking
            };
        }]);