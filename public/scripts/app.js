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
  .state('friend-1', {
    url: '/friend-1',
    templateUrl: 'templates/friend-1.html',
    controller: 'FriendController',
    controllerAs: 'friend'
  })
  .state('team', {
    url: '/team',
    templateUrl: 'templates/team.html'
  })



}

/////////////////
// CONTROLLERS //
/////////////////