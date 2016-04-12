angular.module("babeladvisor").controller("NewHotelCtrl",
    ["$scope", "APIClient", function($scope, APIClient){

        // Scope init
        $scope.model = {};

        $scope.countries = [];
        $scope.prices = ["Bajo", "Medio", "Alto"];

        $scope.formCountry = "";
        $scope.formPrice = "";

        $scope.validCountry = false;
        $scope.invalidCountry = true;
        $scope.validPrice = false;
        $scope.invalidPrice = true;

        $scope.successMessage = null;
        $scope.errorMessage = null;

        getCountries();

        $scope.$watch('hotelForm.country.$modelValue', function(newValue, oldValue) {
            $scope.formCountry = newValue;
            $scope.validCountry = $scope.checkValidCountry();
            $scope.invalidCountry = !$scope.validCountry;
        });

        $scope.$watch('hotelForm.price.$modelValue', function(newValue, oldValue) {
            $scope.formPrice = newValue;
            $scope.validPrice = $scope.checkValidPrice();
            $scope.invalidPrice = !$scope.validPrice;
        });

        // Scope methods
        $scope.saveForm = function(){
            APIClient.createHotel($scope.model).then(
                function(hotel){
                    $scope.successMessage = "¡Hotel guardado con éxito! <br><a href='#/hotels/" + hotel.insertedElement._id + "'>Ver el detalle del nuevo hotel</a>";
                    $scope.model = {};
                    $scope.formCountry = "";
                    $scope.validCountry = false;
                    $scope.invalidCountry = true;
                    $scope.hotelForm.$setPristine();
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

        $scope.checkValidPrice = function(){
            var valid = false;

            for (var i = 0; i < $scope.prices.length && !valid; i++){
                if ($scope.prices[i] === $scope.formPrice){
                    valid = true;
                }
            }

            return valid;
        }

        function getCountries (){
            $scope.countries[0] = "Cargando...";

            APIClient.getCountryList().then(
            // Lista de paises encontrados
            function(data) {
                for (var i = 0; i < data.rows.length; i++){
                    $scope.countries[i] = data.rows[i].name;
                }
            },
            // Promesa rechazada
            function(error) {
                $scope.countries[0] = "No se pudieron cargar";
                $scope.countries[1] = "Error de servidor";
            });
        }

    }]
    );