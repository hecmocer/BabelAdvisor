angular.module("babeladvisor").controller("DestinationsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = [];
    $scope.uiState = 'loading';
    getDestinations();

    function getDestinations () {
        paramC = $location.search().c || "";

        APIClient.getDestinationList(paramC).then(
        // Lista de destinos encontrados
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
            $scope.uiState = 'error';
        });
    }
}])
