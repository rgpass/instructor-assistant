MainController.$inject = ['$state'];
function MainController($state) {
	const vm = this;
	const dayId = $state.params.dayId;
	const hasSecretCode = localStorage.getItem(dayId);

	vm.hasSecretCode = hasSecretCode;
}

module.exports = MainController;
