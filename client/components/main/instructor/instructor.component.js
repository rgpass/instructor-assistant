require('./instructor.scss')

const controller = require('./instructor.controller.js')
const template = require('./instructor.html')

const component = {
	controller,
	template
}

angular
	.module('ia')
	.component('instructor', component)
