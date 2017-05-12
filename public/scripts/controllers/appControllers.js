angular
  .module('App')
  .controller('MainController', MainController)

function MainController ($scope, $state) {
  var vm = this;
  vm.self = "hi";
}