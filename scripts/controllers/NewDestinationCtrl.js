angular.module("babeladvisor").controller("NewDestinationCtrl",
    ["$scope", "APIClient", function($scope, APIClient){

        // Scope init
        $scope.model = {
            "name": "Londreasdascasascascascs",
            "country": "Reino Unido",
            "picture_main": "http://cdn.ek.aero/english/images/London-1_tcm233-2111842.jpg",
            "upVotes": 102,
            "downVotes": 3,
            "link": "http://localhost:8000/#/destinations/5704e341b40041e40411ae2c"
        };
        $scope.percent_progress_ok = 0;
        $scope.successMessage = null;
        $scope.errorMessage = null;

        updateFieldValidation = function(newValue, oldValue){
            if(newValue){
                $scope.percent_progress_ok += 20;
            }else{
                $scope.percent_progress_ok -= 20;
            }
        };

        // $scope.$watch('movieForm.title.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('movieForm.cover.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('movieForm.video_url.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('movieForm.release_date.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('movieForm.rating.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });

        // Scope methods
        $scope.saveForm = function(){
            APIClient.createDestination($scope.model).then(
                function(destination){
                    $scope.successMessage = "destination saved! <a href='#/destinations/" + destination.insertedElement._id + "'>View new destination detail</a>";
                    //$scope.model = {};
                    $scope.destinationForm.$setPristine();
                },
                function(error){
                    $scope.errorMessage = "Fatal error when trying to submit form."
                }
                );
        };

    }]
    );