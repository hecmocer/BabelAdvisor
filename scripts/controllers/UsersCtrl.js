angular.module("babeladvisor").controller("UsersCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    $scope.uiState = "loading"
    getUsers();

    function getUsers () {
        APIClient.getUserList().then(
        // Lista de usuarios encontrados
        function(data) {
            $scope.model = data.rows;
            $scope.uiState = "ideal";
        },
        // Promesa rechazada
        function(error) {
            $scope.uiState = "error";
        });
    }
}])
