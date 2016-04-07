angular.module("babeladvisor").controller("NavBarCtrl", ["$scope", "login", function($scope, login) {

    $scope.model = {}
    $scope.model.currentUser = login.currentUser();

    // Para la navbar
    // // metodos del scope
    // $scope.setSelectedItem = function(item) {
    //     $scope.model.selectedItem = item;
    // }

    // $scope.getClassForItem = function(item) {
    //     if ($scope.model.selectedItem == item) {
    //         return "active";
    //     } else {
    //         return "";
    //     }
    // }

    $scope.logout = function () {
        login.logout();
        $scope.$emit("$loggedOut");
        $scope.model.currentUser = login.currentUser();
    }

    // scope event listeners
    $scope.$on("$userchange", function (evt, user) {
        $scope.model.currentUser = user.name;
    })
}])
