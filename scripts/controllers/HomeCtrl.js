angular.module("babeladvisor").controller("HomeCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getUsers();

    function getUsers () {
        APIClient.getUserList().then(
        // Lista de peliculas encontradas
        function(data) {
            $scope.model = data.rows;
        },
        // Promesa rechazada
        function(error) {
            $scope.uiState = 'error';
        });
    }
}])
