/* --------------------
 * @overlook/plugin-{{name}} module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	{{name}}Plugin = require('@overlook/plugin-{{name}}');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => { // eslint-disable-line jest/lowercase-name
	it('is an instance of Plugin class', () => {
		expect({{name}}Plugin).toBeInstanceOf(Plugin);
	});

	describe('has properties', () => {
		itExports({{name}}Plugin);
	});
});
