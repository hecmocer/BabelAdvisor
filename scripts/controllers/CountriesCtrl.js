angular.module("babeladvisor").controller("CountriesCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getCountries();

    function getCountries () {
        APIClient.getCountryList().then(
        // Lista de peliculas encontradas
        function(data) {
            $scope.model = data.rows;
        },
        // Promesa rechazada
        function(error) {
            console.error("Error al cargar paises");
            //$scope.uiState = 'error';
        });
    }
}])
