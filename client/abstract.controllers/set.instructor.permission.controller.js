SetInstructorPermissionController.$inject = ['$state', 'FirebaseService']
function SetInstructorPermissionController($state, FirebaseService) {
	const { dayId, secretCode } = $state.params

	const day = FirebaseService.getDay(dayId)

	day.on('value', function setPermission(snapshot) {
		const data = snapshot.val()
		const correctSecretCode = data && data.secretCode

		const isPresenter = secretCode === correctSecretCode

		if (isPresenter) {
			localStorage.setItem(dayId, correctSecretCode)
		}

		$state.go('main', { dayId })
	})
}

module.exports = SetInstructorPermissionController
