angular.module("babeladvisor").controller("HotelsCtrl", ["$scope", "$location", "APIClient", function($scope, $location, APIClient) {

    // model init
    $scope.model = {};
    $scope.uiState = "loading";
    getHotels();

    function getHotels () {
        paramC = $location.search().c || "";

        APIClient.getHotelList(paramC).then(
        // Lista de hoteles encontrados
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
