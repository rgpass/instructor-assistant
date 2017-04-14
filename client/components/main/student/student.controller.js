StudentController.$inject = ['$state', 'FirebaseService', '$firebaseArray']
function StudentController($state, FirebaseService, $firebaseArray) {
	const vm = this

	const studentKey = FirebaseService.generateRandomKey()
	const { dayId } = $state.params
	const questionsRef = FirebaseService.questionsForDay(dayId)
	const questions = $firebaseArray(questionsRef)

	vm.isSubmitted = isSubmitted
	vm.questions = questions
	vm.studentKey = studentKey
	vm.studentName = ''
	vm.submitAnswer = submitAnswer

	activate()

	function activate() {}

	function isSubmitted(question) {
		return question &&
			question.answers &&
			question.answers[studentKey]
	}

	function submitAnswer(question) {
		const url = `/days/${dayId}/questions/${question.$id}/answers/${studentKey}`
		const answerRef = FirebaseService.getRefByUrl(url)
		const answerObj = { content: question.answer, studentName: vm.studentName }
		answerRef.set(answerObj)
	}
}

module.exports = StudentController;
