angular.module("babeladvisor").controller("RestaurantDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getRestaurantDetail($routeParams.id).then(
            // Elemento encontrado
            function(restaurant) {
                $scope.model = restaurant;
            },
            // Elemento no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

    }])