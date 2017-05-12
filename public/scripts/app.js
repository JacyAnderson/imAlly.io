angular
  .module('App', [
    'ui.router',
    'satellizer'
  ])
  .config(configRoutes)
  ;


////////////
// ROUTES //
////////////

configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
     .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('next', {
     url: '/next',
     templateUrl: 'templates/next.html',
     controller: 'MainController',
     controllerAs: 'main'
   })
   .state('resource', {
    url: '/resource',
    templateUrl: 'templates/resource.html',
    controller: 'ResourceController',
    controllerAs: 'resource'
  })


}

/////////////////
// CONTROLLERS //
/////////////////