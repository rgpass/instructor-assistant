const firebase = require('firebase')

FirebaseService.$inject = []
function FirebaseService() {
	return {
		answersForQuestion,
		createDay,
		generateRandomKey,
		getDay,
		getRefByUrl,
		questionsForDay,
	}

	function answersForQuestion(dayId, question) {
		return firebase.database().ref(`days/${dayId}/questions/${question.$id}/answers`);
	}

	function createDay() {
		const dayId = generateRandomKey()
		const secretCode = generateRandomKey()

		firebase.database().ref(`days/${dayId}`).set({ secretCode })

		return { dayId, secretCode }
	}

	function generateRandomKey() {
		return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)
	}

	function getDay(dayId) {
		return firebase.database().ref(`days/${dayId}`);
	}

	function getRefByUrl(url) {
		return firebase.database().ref(url);
	}

	function questionsForDay(dayId) {
		return firebase.database().ref(`days/${dayId}/questions`);
	}

	/////


}

angular
	.module('ia')
	.factory('FirebaseService', FirebaseService)
