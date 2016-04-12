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
        this.apiPostRequest = function(uri, data_to_post){
            console.log("POST", uri, data_to_post);

            var url = "http://localhost:3000/" + uri;

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
        this.apiPutRequest = function(uri, data_to_put){
            console.log("PUT", uri, data_to_put);

            var url = "http://localhost:3000/" + uri;

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
            return this.apiGetRequest(apiPaths.users);
        };

        // Petición get para obtener el listado de paises
        this.getCountryList = function(){
            return this.apiGetRequest(apiPaths.countries);
        };

        this.getCountryDetail = function(id){
            var url = apiPaths.countries + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de destinos
        this.getDestinationList = function(paramC){
            if(paramC != ""){
                return this.apiGetRequest(apiPaths.destinations + "?c=" + paramC);
            }
            else{
                return this.apiGetRequest(apiPaths.destinations);
            }
        };

        this.getDestinationDetail = function(id){
            var url = apiPaths.destinations + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de restaurantes
        this.getRestaurantList = function(paramC){
            if(paramC != ""){
                return this.apiGetRequest(apiPaths.restaurants + "?c=" + paramC);
            }
            else{
                return this.apiGetRequest(apiPaths.restaurants);
            }
        };

        this.getRestaurantDetail = function(id){
            var url = apiPaths.restaurants + id;
            return this.apiGetRequest(url);
        }

        // Petición get para obtener el listado de hoteles
        this.getHotelList = function(paramC){
            if(paramC != ""){
                return this.apiGetRequest(apiPaths.hotels + "?c=" + paramC);
            }
            else{
                return this.apiGetRequest(apiPaths.hotels);
            }
        };

        this.getHotelDetail = function(id){
            var url = apiPaths.hotels + id;
            return this.apiGetRequest(url);
        }

        this.voteCountry = function(id, bool){
            var data_to_put = {};
            data_to_put.vote = bool;
            return this.apiPutRequest(apiPaths.countries + id, data_to_put);
        }

        this.voteDestination = function(id, bool){
            var data_to_put = {};
            data_to_put.vote = bool;
            return this.apiPutRequest(apiPaths.destinations + id, data_to_put);
        }
        this.voteHotel = function(id, bool){
            var data_to_put = {};
            data_to_put.vote = bool;
            return this.apiPutRequest(apiPaths.hotels + id, data_to_put);
        }
        this.voteRestaurant = function(id, bool){
            var data_to_put = {};
            data_to_put.vote = bool;
            return this.apiPutRequest(apiPaths.restaurants + id, data_to_put);
        }

        this.createDestination = function(destination){
            destination.upVotes = 0;
            destination.downVotes = 0;
            return this.apiPostRequest(apiPaths.destinations, destination);
        }

        this.createHotel = function(hotel){
            hotel.upVotes = 0;
            hotel.downVotes = 0;
            return this.apiPostRequest(apiPaths.hotels, hotel);
        }

        this.createRestaurant = function(restaurant){
            restaurant.upVotes = 0;
            restaurant.downVotes = 0;
            return this.apiPostRequest(apiPaths.restaurants, restaurant);
        }

        this.getUserPwd = function(userParam){
            if(userParam != ""){
                return this.apiGetRequest(apiPaths.users + "?n=" + userParam);
            }
            else{
                return this.apiGetRequest(apiPaths.users);
            }
        }

        this.createUser = function(username, password, eMail, picture){
            var profilePic = picture || "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
            var data_to_post = {
                profile_picture: profilePic,
                name: username,
                email: eMail,
                pwd: password
            }
            return this.apiPostRequest(apiPaths.users, data_to_post);
        }
    }
    ]);