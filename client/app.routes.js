const AppController = require('./abstract.controllers/app.controller.js')
const SetInstructorPermissionController = require('./abstract.controllers/set.instructor.permission.controller.js')

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function routerConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
		.state('app', {
			url: '/',
			controller: AppController
		})
		.state('setInstructorPermission', {
			url: '/:dayId/:secretCode',
			controller: SetInstructorPermissionController
		})
		.state('main', {
			url: '/:dayId',
			template: '<main></main>'
		})


	$urlRouterProvider.otherwise('/')
}

module.exports = routerConfig;
