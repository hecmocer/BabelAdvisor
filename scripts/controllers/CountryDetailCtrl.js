angular.module("babeladvisor").controller("CountryDetailCtrl",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        $scope.model = {}

        // Controller init
        APIClient.getCountryDetail($routeParams.id).then(
            // País encontrado
            function(country) {
                $scope.model = country.row;
            },
            // País no encontrado
            function(error) {
                $location.url(paths.error);
            }
        );

        $scope.upVote = function(){
            APIClient.voteCountry($scope.model._id, true).then(
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
            APIClient.voteCountry($scope.model._id, false).then(
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