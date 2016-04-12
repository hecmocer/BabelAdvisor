angular.module("babeladvisor").controller("RestaurantsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = [];
    $scope.uiState = "loading";
    getRestaurants();

    function getRestaurants() {
        paramC = $location.search().c || "";

        APIClient.getRestaurantList(paramC).then(
            // Lista de restaurantes encontrados
            function(data) {
                $scope.model = data.rows || "";
                if ($scope.model.length > 0) {
                    $scope.uiState = "ideal";
                } else
                    $scope.uiState = "blank";
            },
            // Promesa rechazada
            function(error) {
                $scope.uiState = 'error';
            });
    }
}])
