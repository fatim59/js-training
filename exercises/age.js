"use strict";

/**
 * Your brother was born in a year and we are today friday, 01st march 2019 and he want to know his age
 * Then write a function `age` who takes two arguments such as the first argument is the current year and de second argument is the year
 * Where your brother was born and return the age of your brother
 */

//Your code here



//Begin of tests

const assert = require('assert');
assert.strictEqual(typeof age, 'function');
assert.strictEqual(age.length, 2);
assert.strictEqual(age(2019, 1997), 22);
assert.strictEqual(age(2019,1999), 20);
assert.strictEqual(age(2019, 2018),1);
assert.strictEqual(age(2019, 2019), 0);


