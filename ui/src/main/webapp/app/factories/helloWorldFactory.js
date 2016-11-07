angular.module('programPlacementApp').factory('HelloWorldFactory', ['$state', '$http', 'MessageFactory', 'BreadcrumbFactory',
    function ($state, $http, MessageFactory, BreadcrumbFactory) {
        var helloWorldFactory = {
            helloWorld: ""
        };

        helloWorldFactory.sayHi = function () {
            $http.get('/hello/world').then(
                function (result) {
                    helloWorldFactory.helloWorld = result;
                }
            );
        };

        return helloWorldFactory;
    }]);
