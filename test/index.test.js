/* --------------------
 * @overlook/plugin-{{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	{{name}}Plugin = require('@overlook/plugin-{{name}}');

// Init
require('./support/index.js');

// Tests

describe('Plugin', () => { // eslint-disable-line jest/lowercase-name
	it('is an instance of Plugin class', () => {
		expect({{name}}Plugin).toBeInstanceOf(Plugin);
	});
});
