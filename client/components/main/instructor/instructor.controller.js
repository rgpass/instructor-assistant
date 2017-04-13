InstructorController.$inject = ['$state', 'FirebaseService', '$firebaseArray']
function InstructorController($state, FirebaseService, $firebaseArray) {
	const vm = this

	const { dayId } = $state.params
	const questions = $firebaseArray(FirebaseService.questionsForDay(dayId))
	const secretCode = localStorage.getItem($state.params.dayId)


	vm.canSeeSecretLink = false
	vm.newQuestionText = ''
	vm.publicLink = location.href
	vm.pushNewQuestion = pushNewQuestion
	vm.questions = []
	vm.secretLink = `${location.href}/${secretCode}`


	activate()

	function activate() {
		vm.questions = questions
	}

	function pushNewQuestion() {
		questions.$add({ content: vm.newQuestionText, answers: [] })
		vm.newQuestionText = ''
	}
}

module.exports = InstructorController;
