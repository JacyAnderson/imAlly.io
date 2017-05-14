angular
  .module('App')
  .controller('MainController', MainController)
  .controller('ResourceController', ResourceController)
  .controller('FriendController', FriendController)
  .controller('MeController', MeController)
  .controller('FeelingController', FeelingController)
  .controller('EmotionController', EmotionController)

// var resObj = {
// 	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
// 	title: 'The Rape, Abuse & Incest National Network (RAINN)',
// 	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
// 	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
// 	type: "Hotline"
// }

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
  // var vm = this;
  // vm.title = resObj.title;
  // vm.logo = resObj.logo;
  // vm.description= resObj.description;
  // vm.url = resObj.url;
  // vm.type = resObj.type;
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