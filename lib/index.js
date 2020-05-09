/* --------------------
 * @overlook/plugin-{{name}} module
 * Entry point
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin');

// Imports
const pkg = require('../package.json');

// Exports

const {{name}}Plugin = new Plugin(
	pkg,
	{symbols: ['TEMP']},
	extend
);

module.exports = {{name}}Plugin;

const {TEMP} = {{name}}Plugin; // eslint-disable-line no-unused-vars

function extend(Route) {
	return class {{name}}Route extends Route {
		// TODO Capitalize class name above
	};
}
