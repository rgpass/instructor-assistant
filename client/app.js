require('angular')
require('./init.firebase.js')
require('angular-ui-router')

const routerConfig = require('./app.routes.js')

angular
	.module('ia', [
		'firebase',
		'ui.router',
	])
	.config(routerConfig)
