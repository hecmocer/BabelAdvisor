angular.module("babeladvisor").controller("HotelDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {};
        $scope.uiState = "loading";

        // Controller init
        APIClient.getHotelDetail($routeParams.id).then(
            // Elemento encontrado
            function(hotel) {
                $scope.model = hotel.row || "";
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
            APIClient.voteHotel($scope.model._id, true).then(
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
            APIClient.voteHotel($scope.model._id, false).then(
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

    }])