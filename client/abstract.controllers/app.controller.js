AppController.$inject = ['$state', 'FirebaseService']
function AppController($state, FirebaseService) {
	const day = FirebaseService.createDay()
	const { dayId, secretCode } = day

	$state.go('setInstructorPermission', { dayId, secretCode })
}

module.exports = AppController;
