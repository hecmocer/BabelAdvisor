angular.module("babeladvisor").controller("LoginCtrl", ["$scope","login", "APIClient", function ($scope, login, APIClient) {

    //scope init
    $scope.model = {};
    $scope.errorMessage = null;

    $scope.login = function (name) {
        login.logIn(name);
        $scope.$emit("$loggedUser", name);
    }

    $scope.checkPwd = function (name, pwd){
        APIClient.getUserPwd(name).then(
            function(result){
                if(result.count > 0){
                    if(pwd === result.rows[0].pwd){
                        $scope.errorMessage = null;
                        $scope.login(name);
                    }
                    else{
                        $scope.errorMessage = "<center><strong>Contraseña incorrecta</strong> <br>Prueba de nuevo</center>";
                    }
                }else{
                    $scope.errorMessage = "<center><strong>No existe tal usuario en nuestro sistema</strong> <br>Prueba de nuevo</center>";
                }
            },
            function(error){
                console.log("No user found");
            });
    }

    $scope.createUser = function (name, pwd, email, picture){
        console.log("intento de registro: ", name, pwd, email, picture);
        APIClient.createUser(name, pwd, email, picture).then(
            function(result){
                $scope.errorMessage = null;
                $scope.login(name);
            },
            function(err){
                console.log("NO SE HA PODIDO INSERTAR EL USUARIO");
            });
    }
}])