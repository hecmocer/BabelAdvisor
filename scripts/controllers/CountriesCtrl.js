angular.module("babeladvisor").controller("CountriesCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    $scope.uiState = "loading";
    getCountries();

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
