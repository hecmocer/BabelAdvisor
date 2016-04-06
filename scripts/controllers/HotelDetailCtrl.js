angular.module("babeladvisor").controller("HotelDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getHotelDetail($routeParams.id).then(
            // Elemento encontrado
            function(hotel) {
                $scope.model = hotel.rows;
            },
            // Elemento no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

    }])