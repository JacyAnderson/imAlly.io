angular
  .module('App')
  .controller('MainController', MainController)
  .controller('ResourceController', ResourceController)



var resObj = {
	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	type: "Hotline"
}

function MainController ($scope, $state) {
  var vm = this;
  vm.self = "hi";
}

function ResourceController ($scope, $state) {
  var vm = this;
  vm.title = resObj.title;
  vm.logo = resObj.logo;
  vm.description= resObj.description;
  vm.url = resObj.url;
  vm.type = resObj.type;
}