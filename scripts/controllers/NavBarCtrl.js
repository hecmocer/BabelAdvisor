angular.module("babeladvisor").controller("NavBarCtrl", ["$scope", "$location", "paths", "login", function($scope, $location, paths, login) {

    $scope.model = {
        selectedItem: $location.path(),
        currentUser: login.currentUser()
    }
    $scope.paths = paths;
    $scope.dynamicAnimation = "";

    // metodos del scope
    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";
        } else {
            return "";
        }
    }

    $scope.logout = function () {
        login.logout();
        $scope.$emit("$loggedOut");
        $scope.model.currentUser = login.currentUser();
    }

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });

    $scope.$on("$userchange", function (evt, user) {
        $scope.model.currentUser = user.name;
    })

    $scope.hoverIn = function(){
        $scope.dynamicAnimation = "animated tada";
    }

    $scope.hoverOut = function(){
        $scope.dynamicAnimation = "";
    }
}])
