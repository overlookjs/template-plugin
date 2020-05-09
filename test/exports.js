/* --------------------
 * @overlook/plugin-{{name}} module
 * Tests
 * Test function to ensure all exports present
 * ------------------*/

/* eslint-disable jest/no-export */

'use strict';

// Exports

module.exports = function itExports({{name}}Plugin) {
	describe.skip('methods', () => { // eslint-disable-line jest/no-disabled-tests
		it.each([
			'TEMP'
		])('%s', (key) => {
			expect({{name}}Plugin[key]).toBeFunction();
		});
	});

	describe('symbols', () => {
		it.each([
			'TEMP'
		])('%s', (key) => {
			expect(typeof {{name}}Plugin[key]).toBe('symbol');
		});
	});
};
