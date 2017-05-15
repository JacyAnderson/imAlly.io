angular
  .module('AdminApp')
  .controller('AdminController', AdminController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('DashboardController', DashboardController);


// Gets current user
AdminController.$inject = ["Account"];
function AdminController (Account) {
  var vm = this;
  vm.currentUser = function() {
   return Account.currentUser();
 }
}

// Controlls loggin for user
LoginController.$inject = ["$location", "Account"];
function LoginController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.login = function() {
    Account
    .login(vm.new_user)
    .then(function(){
        vm.new_user = {}; // clear login form
        $location.path('/admin'); // redirect to '/profile'
      })
  };
}

// Controlls signup process for users
SignupController.$inject = ["$location", "Account"];
function SignupController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.signup = function() {
    Account
    .signup(vm.new_user)
    .then(
      function (response) {
          vm.new_user = {}; // clear sign up form
          $location.path('/admin'); // redirect to '/profile'
        }
        );
  };
}

// Controlls logout fuctionality for user
LogoutController.$inject = ["$location", "Account"];
function LogoutController ($location, Account) {
  Account
  .logout()
  .then(function () {
    $location.path('/admin-login');
  });
}

// Gets database information to display to dashboard
DashboardController.$inject = ["$location", "Account", '$http'];
function DashboardController ($location, Account, $http) {
  var vm = this;
  $http.get('/api/resources')
  .then (function (response) {
    console.log(response);
    vm.all = response.data; // all resources
  });
}

