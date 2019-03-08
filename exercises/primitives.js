'use strict'

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef` with the values "NaN", 219, true, undefined.
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, 'NaN')

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 219)

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, true)

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)
// End of tests */
