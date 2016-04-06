angular.module("babeladvisor").controller("RestaurantsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = {};
    getRestaurants();

    function getRestaurants () {
        paramC = $location.search().c || "";

        APIClient.getRestaurantList(paramC).then(
        // Lista de restaurantes encontrados
        function(data) {
            $scope.model = data.rows;
        },
        // Promesa rechazada
        function(error) {
            console.error("Error al cargar restaurantes");
            //$scope.uiState = 'error';
        });
    }
}])
