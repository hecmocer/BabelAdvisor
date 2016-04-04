angular.module("babeladvisor").service("APIClient",
    ["$http", "$q", "apiPaths",
    function($http, $q, apiPaths){

        // Petición GET al API en la url pasada como parámetro
        this.apiGetRequest = function(url){
            console.log("GET", url);

            /* PRUEBA */
            url = "http://localhost:3000/api/v1/users"

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

        // Petición get del catálogo de películas
        this.getUserList = function(){
            return this.apiGetRequest(apiPaths.users);
        };

    }
    ]);