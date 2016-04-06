angular.module("babeladvisor").controller("HotelsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = {};
    getHotels();

    function getHotels () {
        paramC = $location.search().c || "";

        APIClient.getHotelList(paramC).then(
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
