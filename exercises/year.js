'use strict'
/*
create a function fromYear that will hang a single parameter
* function fromYear must return the input time in parameter.
*
* 
You must first of all master the notions of functions and operations
*/


//Your code here


//* Begin of tests



const assert = require('assert')

assert.strictEqual(typeof fromYear, 'function')
assert.strictEqual(fromYear.length, 1)
assert.strictEqual(fromYear(1905), 20)
assert.strictEqual(fromYear(1700), 17)

// End of tests */
