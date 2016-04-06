angular.module("babeladvisor").controller("CountryDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getCountryDetail($routeParams.id).then(
            // País encontrado
            function(country) {
                $scope.model = country.rows;
            },
            // País no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

    }]);