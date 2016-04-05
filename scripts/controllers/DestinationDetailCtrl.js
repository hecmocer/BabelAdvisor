angular.module("babeladvisor").controller("DestinationDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient",
    function($scope, $routeParams, $location, APIClient){

        $scope.model = {}

        // Controller init
        APIClient.getDestinationDetail($routeParams.id).then(
            // Elemento encontrado
            function(destination) {
                $scope.model = destination;
            },
            // Elemento no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

    }]);