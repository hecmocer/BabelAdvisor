angular.module("babeladvisor").controller("DestinationDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getDestinationDetail($routeParams.id).then(
            // Elemento encontrado
            function(destination) {
                $scope.model = destination.rows;
            },
            // Elemento no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

    }]);