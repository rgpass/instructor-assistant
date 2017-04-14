StudentController.$inject = ['$state', 'FirebaseService', '$firebaseArray']
function StudentController($state, FirebaseService, $firebaseArray) {
	const vm = this

	const studentKey = getOrGenerateStudentKey();
	const { dayId } = $state.params
	const questionsRef = FirebaseService.questionsForDay(dayId)
	const questions = $firebaseArray(questionsRef)

	vm.isSubmitted = isSubmitted
	vm.questions = questions
	vm.studentKey = studentKey
	vm.studentName = localStorage.getItem('studentName') || ''
	vm.submitAnswer = submitAnswer
	vm.updateName = updateName

	activate()

	function activate() {}

	function getOrGenerateStudentKey() {
		let key = localStorage.getItem('studentKey')
		key = key || FirebaseService.generateRandomKey()
		localStorage.setItem('studentKey', key)
		return key
	}

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

	function updateName() {
		localStorage.setItem('studentName', vm.studentName)
	}
}

module.exports = StudentController;
