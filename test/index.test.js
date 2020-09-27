/* --------------------
 * @overlook/plugin-{{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	Route = require('@overlook/route'),
	{{name}}Plugin = require('@overlook/plugin-{{name}}');

// Init
require('./support/index.js');

// Tests

describe('Plugin', () => {
	it('is an instance of Plugin class', () => {
		expect({{name}}Plugin).toBeInstanceOf(Plugin);
	});

	it('when passed to `Route.extend()`, returns subclass of Route', () => {
		// TODO Capitalize class name below
		const {{name}}Route = Route.extend({{name}}Plugin);
		expect({{name}}Route).toBeFunction();
		expect({{name}}Route).toBeDirectSubclassOf(Route);
	});
});
