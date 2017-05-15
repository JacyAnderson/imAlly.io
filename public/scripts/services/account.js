angular.module('AdminApp')
.service('Account', Account);


//////////////
// Services //
//////////////

Account.$inject = ["$http", "$q", "$auth"]; // minification protection
function Account($http, $q, $auth) {
  var self = this;
  self.user = null;
  self.signup = signup;
  self.login = login;
  self.logout = logout;
  self.currentUser = currentUser;
  self.getProfile = getProfile;
  self.updateProfile = updateProfile;
  self.loginAttempt = false;

  // sign user up
  function signup(userData) {
    return (
      $auth
        .signup(userData)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token
          },

          function onError(error) {
            console.error(error);
          }
          )
        );
  }

  // log user in
  function login(userData) {
    return (
      $auth
        .login(userData)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token
          },

          function onError(error) {
            console.error(error);
            self.loginFail = true;
          }
          )
        );
  }

  // log user out
  function logout() {
    return (
      $auth
        .logout() // delete token (https://github.com/sahat/satellizer#authlogout)
        .then(function() {
          self.user = null;
        })
      );
  }

  // get current user
  function currentUser() {
    if ( self.user ) { return self.user; }
    if ( !$auth.isAuthenticated() ) { return null; }

    var deferred = $q.defer();
    getProfile().then(
      function onSuccess(response) {
        self.user = response.data;
        deferred.resolve(self.user);
      },

      function onError() {
        $auth.logout();
        self.user = null;
        deferred.reject();
      }
      )
    self.user = promise = deferred.promise;
    return promise;

  }

  // get users profile
  function getProfile() {
    return $http.get('/api/me');
  }

  // Update profile
  function updateProfile(profileData) {
    return (
      $http
      .put('/api/me', profileData)
      .then(
        function (response) {
          self.user = response.data;
        }
        )
      );
  }
}