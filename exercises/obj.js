'use strict'

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof obj, 'object')

assert.strictEqual(typeof obj.str, 'string')
assert.strictEqual(obj.str, 'NaN')

assert.strictEqual(typeof obj.num, 'number')
assert.strictEqual(obj.num, 219)

assert.strictEqual(typeof obj.bool, 'boolean')
assert.strictEqual(obj.bool, true)

assert.strictEqual(typeof obj.undef, 'undefined')
assert.strictEqual(obj.undef, undefined)
// End of tests */
