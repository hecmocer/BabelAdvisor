angular.module("babeladvisor").controller("AppCtrl",
    ["$scope", "login",
    function($scope, login){
        var controller = this;

        // Scope init
        $scope.model = {};
        $scope.model.user = login.currentUser();

        // Cambiar de usuario
        // Manda un evento de cambio de usuario a los controladores hijo
        controller.updateUser = function (name) {
            $scope.model.user = name;
            $scope.$broadcast("$userchange", {name: name});
        }

        // Gestión de login
        // Cuando se recibe el evento de login se actualiza el usuario
        $scope.$on("$loggedUser", function (evt, name) {
            controller.updateUser(name);
        })

        // Gestión de logout
        // Cuando se recibe el evento de logout se actualiza el usuario a null
        $scope.$on("$loggedOut", function (evt) {
            controller.updateUser(null);
        })
    }]
    );