angular.module("babeladvisor").controller("LoginCtrl", ["$scope","login", "APIClient", function ($scope, login, APIClient) {

    //scope init
    $scope.model = {};

    $scope.login = function (name) {
        login.logIn(name);
        $scope.$emit("$loggedUser", name);
    }

    $scope.checkPwd = function (name, pwd){
        APIClient.getUserPwd(name).then(
            function(result){
                if(result.count > 0){
                    if(pwd === result.rows[0].pwd){
                        console.log("LOGIN CORRECTO");
                        $scope.login(name);
                    }
                    else{
                        console.log("PWD INCORRECTA");
                    }
                }else{
                    console.log("No tenemos ningun usuario registrado con ese nombre");
                }
            },
            function(error){
                console.log("No user found");
            });
    }
}])