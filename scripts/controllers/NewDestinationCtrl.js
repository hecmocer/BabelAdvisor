angular.module("babeladvisor").controller("NewDestinationCtrl",
    ["$scope", "APIClient", function($scope, APIClient){

        // Scope init
        $scope.model = {};
        $scope.countries = [];
        $scope.formCountry = "";
        $scope.validCountry = false;
        $scope.invalidCountry = true;
        $scope.successMessage = null;
        $scope.errorMessage = null;
        getCountries();

        $scope.$watch('destinationForm.country.$modelValue', function(newValue, oldValue) {
            $scope.formCountry = newValue;
            $scope.validCountry = $scope.checkValidCountry();
            $scope.invalidCountry = !$scope.validCountry;
        });

        // Scope methods
        $scope.saveForm = function(){
            APIClient.createDestination($scope.model).then(
                function(destination){
                    $scope.successMessage = "¡Destino guardado con éxito! <br> <a href='#/destinations/" + destination.insertedElement._id + "'>Ver el detalle del nuevo destino</a>";
                    $scope.model = {};
                    $scope.formCountry = "";
                    $scope.validCountry = false;
                    $scope.invalidCountry = true;
                    $scope.destinationForm.$setPristine();
                },
                function(error){
                    $scope.errorMessage = "Fatal error when trying to submit form.";
                }
                );
        };

        $scope.checkValidCountry = function(){
            var valid = false;

            for (var i = 0; i < $scope.countries.length && !valid; i++){
                if ($scope.countries[i] === $scope.formCountry){
                    valid = true;
                }
            }

            return valid;
        }

        function getCountries (){
            APIClient.getCountryList().then(
            // Lista de paises encontrados
            function(data) {
                for (var i = 0; i < data.rows.length; i++){
                    $scope.countries[i] = data.rows[i].name;
                }
            },
            // Promesa rechazada
            function(error) {
                console.error("Error al cargar paises");
            });
        }

    }]
    );