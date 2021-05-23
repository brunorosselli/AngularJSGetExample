angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) { 

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });

          // Rotas das Páginas 

        $routeProvider.when('/home', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

      
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });
        // novidade aqui! Nova rota!
        $routeProvider.when('/edit:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // ( $routeProvider.otherwise ) é usando quando nenhum caminho da URL é escrito.

        $routeProvider.otherwise({redirectTo: '/home'});

    });