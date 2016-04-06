angular.module("babeladvisor").controller("DestinationsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = {};
    getDestinations();

    function getDestinations () {
        paramC = $location.search().c || "";

        APIClient.getDestinationList(paramC).then(
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
