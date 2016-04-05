angular.module("babeladvisor").service("APIClient",
    ["$http", "$q", "apiPaths",
    function($http, $q, apiPaths){

        // Petición GET al API en la url pasada como parámetro
        this.apiGetRequest = function(uri){
            console.log("GET", uri);

            var url = "http://localhost:3000/" + uri;

            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.get(url).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        // Petición POST al API en la url y con los datos para crear pasados como parámetro
        this.apiPostRequest = function(url, data_to_post){
            console.log("POST", data_to_post);

            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.post(url, data_to_post).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        // Petición PUT al API en la url con los datos para modifical pasados como parámetro
        this.apiPutRequest = function(url, data_to_put){
            console.log("PUT", data_to_put);

            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.put(url, data_to_put).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        // Petición get para obtener el listado de usuarios
        this.getUserList = function(){
            console.log("1");
            return this.apiGetRequest(apiPaths.users);
        };

        // Petición get para obtener el listado de paises
        this.getCountryList = function(){
            console.log("2");
            return this.apiGetRequest(apiPaths.countries);
        };

        this.getCountryDetail = function(id){
            console.log("3");
            var url = apiPaths.countries + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de destinos
        this.getDestinationList = function(){
            console.log("4");
            return this.apiGetRequest(apiPaths.destinations);
        };

        this.getDestinationDetail = function(id){
            console.log("5");
            var url = apiPaths.destinations + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de restaurantes
        this.getRestaurantList = function(){
            console.log("6");
            return this.apiGetRequest(apiPaths.restaurants);
        };

        this.getRestaurantDetail = function(id){
            console.log("7");
            var url = apiPaths.restaurants + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de hoteles
        this.getHotelList = function(){
            console.log("8");
            return this.apiGetRequest(apiPaths.hotels);
        };

        this.getHotelDetail = function(id){
            console.log("9");
            var url = apiPaths.hotels + id;
            return this.apiGetRequest(url);
        }

        this.upVote = function(obj){
            obj.upVotes++;
            return obj;
        }

        this.downVote = function(obj){
            obj.downVotes++;
            return obj;
        }

    }
    ]);