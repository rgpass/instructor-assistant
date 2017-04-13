const angular = require('angular');
const firebase = require('firebase');
require('angularfire');
require('angular-ui-router');

var config = {
  apiKey: "AIzaSyC_iIF0NJay7azTXLjmVh0JaOoPSwxD_vE",
  authDomain: "instructorassistant-92dbe.firebaseapp.com",
  databaseURL: "https://instructorassistant-92dbe.firebaseio.com",
  projectId: "instructorassistant-92dbe",
  storageBucket: "instructorassistant-92dbe.appspot.com",
  messagingSenderId: "712876025357"
};
firebase.initializeApp(config);

angular
	.module('ia', [
		'firebase',
		'ui.router',
	])
	.config(routerConfig);


routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
		.state('app', {
			url: '/',
			controller: ['$state', '$firebaseArray', function AppController($state, $firebaseArray) {
				const dayId = generateRandomKey();
				const secretCode = generateRandomKey();

				createDay(dayId, secretCode);

				$state.go('setPresenterPermission', { dayId, secretCode });
			}]
		})
		.state('setPresenterPermission', {
			url: '/:dayId/:secretCode',
			controller: ['$state', function PresenterController($state) {
				const { dayId, secretCode } = $state.params;

				const day = firebase.database().ref(`days/${dayId}`);
				day.on('value', function setPermission(snapshot) {
					const data = snapshot.val();
					const correctSecretCode = data && data.secretCode;
					const isPresenter = secretCode === correctSecretCode;

					if (isPresenter) {
						localStorage.setItem(dayId, true);
					}

					$state.go('main', { dayId });
				})
			}]
		})
		.state('main', {
			url: '/:dayId',
			template: '<main></main>'
		})


	$urlRouterProvider.otherwise('/');
}

function generateRandomKey() {
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
}

function createDay(dayId, secretCode) {
	firebase.database().ref(`days/${dayId}`).set({ secretCode });
}


