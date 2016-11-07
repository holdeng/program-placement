var programPlacementApp = angular.module('programPlacementApp', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'ngSanitize',
    'datatables',
    'datatables.bootstrap',
    'datatables.buttons'
]);

var buildTimestampQueryString = function () {
    return buildTimestampSubstring('?', 0);
};

var buildTimestamp = function () {
    return buildTimestampSubstring('=', 1);
};

var buildTimestampSubstring = function (splitOnChar, splitIncrement) {
    var timeStamp = '',
        appJsElement = document.getElementById('appJs');
    if (appJsElement != null) {
        var appJsSrc = appJsElement.src,
            qsIndex = appJsSrc.indexOf(splitOnChar) + splitIncrement;
        if (qsIndex > 0) {
            timeStamp = appJsSrc.substr(qsIndex);
        }
    }
    return timeStamp;
};

programPlacementApp
    .run(['$rootScope', '$state', 'DTDefaultOptions', function ($rootScope, $state, DTDefaultOptions) {
        $rootScope.$state = $state;
        $rootScope.sessionIsLoaded = document.sessionProperties !== undefined;

        DTDefaultOptions.setLanguage({
            'sInfo': '_TOTAL_ of _MAX_ Records',
            'sInfoFiltered': '',
            'sInfoEmpty': '_TOTAL_ of _MAX_ Records',
            'sEmptyTable': 'No data available',
            'sZeroRecords': 'No data available',
            'sSearch': '<span class="sr-only">Filter Text</span>',
            'sSearchPlaceholder': 'Search',
            'sAria': {
                "sortAscending": ": sort column ascending",
                "sortDescending": ": sort column descending"
            }
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
            $urlRouterProvider.when("", "/");
            $urlRouterProvider.otherwise("/notFound");

            $stateProvider
                .state('start', {
                    url: '/',
                    templateUrl: 'app/templates/hello-world.html' + buildTimestampQueryString(),
                    label: 'Home',
                    hideHeading: true,
                    hideBreadcrumb: true
                });

            $provide.decorator('$exceptionHandler', ['$delegate', '$injector', function ($delegate, $injector) {
                return function (exception) {
                    $injector.invoke(['$rootScope', function ($rootScope) {
                        $rootScope.$broadcast('error', exception.message);
                    }]);
                    return $delegate(exception);
                };
            }]);

            $httpProvider.interceptors.push('HttpInterceptorFactory');
        }]);
