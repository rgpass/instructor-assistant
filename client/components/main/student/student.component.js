const controller = require('./student.controller.js')
const template = require('./student.html')

const component = {
	controller,
	template
}

angular
	.module('ia')
	.component('student', component)
