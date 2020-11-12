app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl',
        })
        .when('/nosahistoria', {
            templateUrl: 'app/views/nossaHistoria.html',
            controller: 'nossaHistoriaCtrl',
        })
        .when('/nossotrabalho', {
            templateUrl: 'app/views/nossoTrabalho.html',
            controller: 'nossoTrabalhoCtrl',
        })
        .when('/produtos', {
            templateUrl: 'app/views/produtos.html',
            controller: 'produtosCtrl',
        })
        .when('/servicos', {
            templateUrl: 'app/views/servicos.html',
            controller: 'servicosCtrl',
        })
        .when('/faleconosco', {
            templateUrl: 'app/views/contato.html',
            controller: 'contatoCtrl',
        })
        .when('/catalogo', {
            templateUrl: 'app/views/catalogo.html',
            controller: 'catalogoCtrl',
        })


    .otherwise({ redirectTo: '/' });
});