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

module.exports = new Plugin(
	pkg,
	{symbols: ['TEMP']},
	(Route, {TEMP}) => class {{name}}Route extends Route {
		// TODO Capitalize class name above
	}
);
