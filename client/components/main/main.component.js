require('./main.scss')

const template = require('./main.html');
const controller = require('./main.controller.js');

const component = {
	controller,
	template
};

angular
	.module('ia')
	.component('main', component);
