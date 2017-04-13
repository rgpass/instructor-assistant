const controller = require('./navbar.controller.js')
const template = require('./navbar.html')

const component = {
	controller,
	template,
}

angular
	.module('ia')
	.component('navbar', component)
