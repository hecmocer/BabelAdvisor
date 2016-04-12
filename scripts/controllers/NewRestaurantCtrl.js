angular.module("babeladvisor").controller("NewRestaurantCtrl",
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

        $scope.$watch('restaurantForm.country.$modelValue', function(newValue, oldValue) {
            $scope.formCountry = newValue;
            $scope.validCountry = $scope.checkValidCountry();
            $scope.invalidCountry = !$scope.validCountry;
        });

        // Scope methods
        $scope.saveForm = function(){
            APIClient.createRestaurant($scope.model).then(
                function(restaurant){
                    $scope.successMessage = "¡Restaurante guardado con éxito! <br><a href='#/restaurants/" + restaurant.insertedElement._id + "'>Ver el detalle del nuevo restaurante</a>";
                    $scope.model = {};
                    $scope.formCountry = "";
                    $scope.validCountry = false;
                    $scope.invalidCountry = true;
                    $scope.restaurantForm.$setPristine();
                },
                function(error){
                    $scope.errorMessage = "Fatal error when trying to submit form."
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
                //$scope.uiState = 'error';
            });
        }

    }]
    );