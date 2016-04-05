angular.module("babeladvisor").controller("RestaurantsCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getRestaurants();

    function getRestaurants () {
        APIClient.getRestaurantList().then(
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
