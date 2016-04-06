angular.module("babeladvisor").controller("NewDestinationCtrl",
    ["$scope", "APIClient", function($scope, APIClient){

        // Scope init
        $scope.model = {};
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

        $scope.$watch('destinationForm.name.$valid', function(newValue, oldValue) {
             updateFieldValidation(newValue, oldValue);
        });
         $scope.$watch('destinationForm.picture_main.$valid', function(newValue, oldValue) {
             updateFieldValidation(newValue, oldValue);
         });
        // $scope.$watch('destinationForm.video_url.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('destinationForm.release_date.$valid', function(newValue, oldValue) {
        //     updateFieldValidation(newValue, oldValue);
        // });
        // $scope.$watch('destinationForm.rating.$valid', function(newValue, oldValue) {
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