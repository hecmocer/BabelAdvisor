angular.module("babeladvisor").controller("AppCtrl",
    ["$scope", "login",
    function($scope, login){
        var controller = this;

        // Scope init
        $scope.model = {};
        $scope.model.user = login.currentUser();

        controller.updateUser = function (name) {
            $scope.model.user = name;
            $scope.$broadcast("$userchange", {name: name});
        }

        $scope.$on("$loggedUser", function (evt, name) {
            controller.updateUser(name);
        })

        $scope.$on("$loggedOut", function (evt) {
            controller.updateUser(null);
        })
    }]
    );