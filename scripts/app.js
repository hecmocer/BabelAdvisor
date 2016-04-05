// Definimos el módulo
angular.module("babeladvisor", ["ngRoute", "ngSanitize"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {

        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.root, {
            redirectTo: paths.home
        }).when(paths.home, {
            templateUrl: "views/home.html"
        }).when(paths.users, {
            templateUrl: "views/users.html"
        }).when(paths.countries, {
            templateUrl: "views/countries.html"
        }).when(paths.countryDetail, {
            templateUrl: "views/countryDetail.html"
        }).when(paths.destinations, {
            templateUrl: "views/destinations.html"
        }).when(paths.destinationDetail, {
            templateUrl: "views/destinationDetail.html"
        }).when(paths.hotels, {
            templateUrl: "views/hotels.html"
        }).when(paths.hotelDetail, {
            templateUrl: "views/hotelDetail.html"
        }).when(paths.restaurants, {
            templateUrl: "views/restaurants.html"
        }).when(paths.restaurantDetail, {
            templateUrl: "views/restaurantDetail.html"
        }).when(paths.error, {
            templateUrl: "views/404.html"
        }).otherwise({
            redirectTo: paths.error
        })
    }]);
