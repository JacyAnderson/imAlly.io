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
  .state('me-1', {
    url: '/me-1',
    templateUrl: 'templates/me-1.html',
    controller: 'MeController',
    controllerAs: 'me'
  })
  .state('feeling', {
    url: '/feeling',
    templateUrl: 'templates/feeling.html',
    controller: "FeelingController",
    controllerAs: 'feeling'
  })
  .state('emotion', {
    url: '/emotion',
    templateUrl: 'templates/current-emotion.html',
    controller: "EmotionController",
    controllerAs: 'emotion'
  })
  .state('team', {
    url: '/team',
    templateUrl: 'templates/team.html'
  })
  .state('violated', {
    url: '/violated',
    templateUrl: 'templates/violated.html',
    controller: "ViolatedController",
    controllerAs: 'violated'
  })



}

/////////////////
// CONTROLLERS //
/////////////////