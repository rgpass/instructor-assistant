# InstructorAssistant

## Overview

InstructorAssistant is a tool to empower instructors, both primary and secondary, to scale up one-on-one checks for understanding.

## Todos

* Build app
* Build sub-components
* Create favicon
* Switch from `nodemon` to `node-foreman`

## Getting Started

* Clone the repo to your local machine
* `npm install`
* In one window, start the client with `npm run start:dev:client`
* In another window, start the server with `npm run start:dev:server`
* Navigate to the port that is logged when starting the server

## Docs for Confusing Topics

The process done when creating a new day is:

1. Create the day in Firebase
1. Forward to `setInstructorPermissions` state
1. If the special link is valid, enable instructor view for that `dayId`
1. Forward to the normal URL

There is a special state called `setInstructorPermissions`. This is because instructors will need to share the special instructor link for other instructors to see the answers.

## Special Notes

Webpack dependencies found in `package.json`

* JavaScript
	* `babel-core`
	* `babel-loader`
* SCSS
	* `style-loader`
	* `css-loader`
	* `scss-loader`
	* `node-sass`
* HTML
	* `raw-loader`
