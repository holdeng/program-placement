programPlacementApp.controller('HelloWorldController', ['HelloWorldFactory',
function (HelloWorldFactory) {
    var controller = this;
    HelloWorldFactory.sayHi();
    controller.helloWorld = HelloWorldFactory.helloWorld;
}]);
