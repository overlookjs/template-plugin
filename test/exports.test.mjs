/* --------------------
 * @overlook/plugin-{{name}} module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import Plugin from '@overlook/plugin';
import {{name}}Plugin, * as namedExports from '@overlook/plugin-{{name}}/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => {
	it('default export is an instance of Plugin class', () => {
		expect({{name}}Plugin).toBeInstanceOf(Plugin);
	});

	describe('default export has properties', () => {
		itExports({{name}}Plugin);
	});

	describe('named exports', () => {
		itExports(namedExports);
	});
});
