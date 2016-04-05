angular.module("babeladvisor").controller("DestinationsCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getDestinations();

    function getDestinations () {
        APIClient.getDestinationList().then(
        // Lista de destinos encontrados
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
