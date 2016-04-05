angular.module("babeladvisor").controller("CountryDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getCountryDetail($routeParams.id).then(
            // País encontrado
            function(country) {
                console.log("pais encontrado");
                $scope.model = country;
            },
            // País no encontrado
            function(error) {
                console.log("pais no encontrado");
                $location.url(paths.error);
            }
        );

    }]);