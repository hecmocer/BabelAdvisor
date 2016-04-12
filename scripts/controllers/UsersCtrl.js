angular.module("babeladvisor").controller("UsersCtrl", ["$scope", "APIClient", function($scope, APIClient) {

    // model init
    $scope.model = {};
    getUsers();

    function getUsers () {
        APIClient.getUserList().then(
        // Lista de usuarios encontrados
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
