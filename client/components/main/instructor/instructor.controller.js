InstructorController.$inject = ['$state', 'FirebaseService', '$firebaseArray', '$rootScope']
function InstructorController($state, FirebaseService, $firebaseArray, $rootScope) {
	const vm = this

	const { dayId } = $state.params
	const questions = $firebaseArray(FirebaseService.questionsForDay(dayId))
	const secretCode = localStorage.getItem($state.params.dayId)


	vm.canSeeSecretLink = false
	vm.isAnonymous = true
	vm.newQuestionText = ''
	vm.publicLink = ''
	vm.pushNewQuestion = pushNewQuestion
	vm.questions = questions
	vm.secretLink = ''
	

	activate()

	function activate() {
		_updateLinks()
	}

	function pushNewQuestion() {
		questions.$add({ content: vm.newQuestionText, answers: [] })
		vm.newQuestionText = ''
	}


	//////////


	// Solves a weird UI-Router issue not picking up the updated location
	function _updateLinks() {
		setTimeout(function setLinksAndRunDigest() {
			vm.publicLink = location.href || 'UI Router error -- Refresh the page to see link'
			vm.secretLink = `${location.href}/${secretCode}`
			$rootScope.$apply()
		}, 100)
	}
}

module.exports = InstructorController;
