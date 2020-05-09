/* --------------------
 * @overlook/plugin-{{name}} module
 * ESM entry point
 * Re-export CJS with named exports
 * ------------------*/

// Exports

import {{name}}Plugin from '../lib/index.js';

export default {{name}}Plugin;
export const {
	TEMP
} = {{name}}Plugin;
