angular
.module('AdminApp', [
  'ui.router',
  'satellizer'
  ])
.config(configRoutes)
;


////////////
// ROUTES //
////////////

// Configure routes with ui-router

configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/admin");

  // sets up states and urls as well as controllers for admin routes
  $stateProvider
  .state('dashboard', {
    url: '/admin',
    templateUrl: 'templates/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'dc',
    resolve: {
      loginRequired: loginRequired
    }
  })
  .state('signup', {
    url: '/admin-signup',
    templateUrl: 'templates/signup_mat.html',
    controller: 'SignupController',
    controllerAs: 'sc',
    resolve: {
      skipIfLoggedIn: skipIfLoggedIn
    }
  })
  .state('login', {
    url: '/admin-login',
    templateUrl: 'templates/login_mat.html',
    controller: 'LoginController',
    controllerAs: 'lc',
    resolve: {
      skipIfLoggedIn: skipIfLoggedIn
    }
  })
  .state('logout', {
    url: '/admin-logout',
    template: null,
    controller: 'LogoutController',
    resolve: {
      loginRequired: loginRequired
    }
  })

    // tests if user is logged in and skips page
    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    // tests if user is logged in and gives access to page if true
    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/admin-login');
      }
      return deferred.promise;
    }

  }