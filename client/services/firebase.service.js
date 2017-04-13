const firebase = require('firebase')

FirebaseService.$inject = []
function FirebaseService() {
	return {
		createDay,
		getDay,
	}

	function createDay() {
		const dayId = _generateRandomKey()
		const secretCode = _generateRandomKey()

		firebase.database().ref(`days/${dayId}`).set({ secretCode })

		return { dayId, secretCode }
	}

	function getDay(dayId) {
		return firebase.database().ref(`days/${dayId}`);
	}

	

	function _generateRandomKey() {
		return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)
	}
}

angular
	.module('ia')
	.factory('FirebaseService', FirebaseService)
