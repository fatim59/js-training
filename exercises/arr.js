'use strict'

/*
 * Create a constant variable named `arr` that is an array containing the values 219 and 'NaN'
 *
 * @notions Data-Structures
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(Array.isArray(arr), true)
assert.strictEqual(arr[0], 219)
assert.strictEqual(arr[1], 'NaN')
assert.strictEqual(arr.length, 2)
// End of tests */
