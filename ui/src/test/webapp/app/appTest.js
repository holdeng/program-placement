describe("Route Test", function () {

    beforeEach(angular.mock.module('programPlacementApp'));

    // Act and Assess
    it('should map routes to appropriate page', function () {
        inject(function ($state) {
            expect($state.get('start').templateUrl).
                toEqual('app/templates/hellow-world.html');
        });
    });
});
