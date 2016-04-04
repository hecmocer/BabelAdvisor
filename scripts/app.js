// Definimos el módulo
angular.module("babeladvisor", ["ngRoute", "ngSanitize"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {

        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.root, {
            redirectTo: paths.home
        }).when(paths.home, {
            templateUrl: "views/home.html"
        }).when(paths.error, {
            templateUrl: "views/404.html"
        }).otherwise({
            redirectTo: paths.error
        })
    }]);
