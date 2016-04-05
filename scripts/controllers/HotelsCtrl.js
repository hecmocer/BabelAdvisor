angular.module("babeladvisor").controller("HotelsCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getHotels();

    function getHotels () {
        APIClient.getHotelList().then(
        // Lista de hoteles encontrados
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
