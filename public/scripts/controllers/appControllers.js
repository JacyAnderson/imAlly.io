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
.controller('IdkController', IdkController)

function MainController() {
  var vm = this;
  vm.self = "hi";
}

// gets all resources from api
ResourceController.$inject = ["$http"];
function ResourceController ($http) {
	var vm = this;
	$http.get('/api/resources')
  .then (function (response) {
   vm.all = response.data;
 });
}

// sets up controller for later
function FriendController() {
  var vm = this;
  vm.self = "hi";
}

// sets up controller for later
function MeController () {
  var vm = this;
  vm.self = "Hello!";
}

// sets up controller for later
function FeelingController() {
  var vm = this;
  vm.self = "All the feels";
}

// sets up controller for later
function EmotionController() {
  var vm = this;
  vm.self = "Listing emotions";
}

// sets up controller for later
function ViolatedController() {
  var vm = this;
  vm.self = "Violated";
}

// sets up controller for later
function HappyController() {
  var vm = this;
  vm.self = "Happy";
}

//sets up controller for idk
function IdkController() {
  var vm = this;
  vm.self = "Idk";
}

