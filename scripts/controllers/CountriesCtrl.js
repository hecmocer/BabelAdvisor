angular.module("babeladvisor").controller("CountriesCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // Scope init
    $scope.model = {};
    $scope.uiState = "loading";
    getCountries();

    // Función que carga en el model los paises
    function getCountries () {
        APIClient.getCountryList().then(
        // Lista de paises encontrados
        function(data) {
            $scope.model = data.rows || "";
            if($scope.model.length > 0){
                $scope.uiState = "ideal";
            }
            else
                $scope.uiState = "blank";
        },
        // Promesa rechazada
        function(error) {
            $scope.uiState = "error";
        });
    }
}])
