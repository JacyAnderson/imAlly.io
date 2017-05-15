angular
  .module('App')
  .controller('MainController', MainController)
  .controller('ResourceController', ResourceController)
  .controller('FriendController', FriendController)
  .controller('MeController', MeController)
  .controller('FeelingController', FeelingController)
  .controller('EmotionController', EmotionController)
  .controller('ViolatedController', ViolatedController)
  .controller('HappyController', HappyController)



function MainController ($scope, $state) {
  var vm = this;
  vm.self = "hi";
}

ResourceController.$inject = ["$http"];
function ResourceController ($http) {
	var vm = this;
	$http.get('/api/resources')
		.then (
			function (response) {
           		vm.all = response.data;
          }
        )
  
}

function FriendController ($scope, $state) {
  var vm = this;
  vm.self = "hi";
}

function MeController ($scope, $state) {
  var vm = this;
  vm.self = "Hello!";
}

function FeelingController ($scope, $state) {
  var vm = this;
  vm.self = "All the feels";
}

function EmotionController ($scope, $state) {
  var vm = this;
  vm.self = "Listing emotions";
}

function ViolatedController ($scope, $state) {
  var vm = this;
  vm.self = "Violated";
}

function HappyController ($scope, $state) {
  var vm = this;
  vm.self = "Happy";
}

