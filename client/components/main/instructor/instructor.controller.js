InstructorController.$inject = ['$state']
function InstructorController($state) {
	const vm = this
	const secretCode = localStorage.getItem($state.params.dayId)

	vm.canSeeSecretLink = false
	vm.publicLink = location.href
	vm.secretLink = `${location.href}/${secretCode}`
}

module.exports = InstructorController;
