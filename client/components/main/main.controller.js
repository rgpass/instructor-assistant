MainController.$inject = ['$state'];
function MainController($state) {
	const vm = this;
	const dayId = $state.params.dayId;
	const secretCode = localStorage.getItem(dayId);

	vm.secretCode = secretCode;
}

module.exports = MainController;
