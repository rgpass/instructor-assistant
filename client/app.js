require('angular')

require('./bootstrap.scss')
require('./bootstrap.overrides.scss')
require('angular-ui-bootstrap')

require('./init.firebase.js')
require('angular-ui-router')

const routerConfig = require('./app.routes.js')

angular
	.module('ia', [
		'ui.bootstrap',
		'firebase',
		'ui.router',
	])
	.config(routerConfig)
