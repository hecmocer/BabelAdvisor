angular.module("babeladvisor").controller("DestinationDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {};
        $scope.uiState = "loading";

        // Controller init
        APIClient.getDestinationDetail($routeParams.id).then(
            // Elemento encontrado
            function(destination) {
                $scope.model = destination.row || "";
                if($scope.model.length != ""){
                    $scope.uiState = "ideal";
                }
                else
                    $scope.uiState = "blank";
            },
            // Elemento no encontrado
            function(error) {
                $scope.uiState = "error";
                $location.url(paths.error);
            }
        );

        $scope.upVote = function(){
            APIClient.voteDestination($scope.model._id, true).then(
            // Voto correcto
            function(result){
                $scope.model = result.row;
            },
            // Voto incorrecto
            function(error){
                $location.url(paths.error);
            }
            );
        }

        $scope.downVote = function(){
            APIClient.voteDestination($scope.model._id, false).then(
            // Voto correcto
            function(result){
                $scope.model = result.row;
            },
            // Voto incorrecto
            function(error){
                $location.url(paths.error);
            }
            );
        }

    }]);