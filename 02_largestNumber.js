/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/

function largestNumber(arr) {
  let larger = null;
  for (let i = 0; i < arr.length; i++) {
    if (larger < arr[i]) {
      larger = arr[i];
    }
  }
  return larger;
}

var assert = require("assert");

describe("largestNumber", function() {
  it("should return the largest number", function() {
    assert.equal(10, largestNumber([5, -2, 10]));
  });
  it("should ignore invalid array entries", function() {
    assert.equal(10, largestNumber([10, 10, "s"]));
  });
  it("should return null if the array is empty", function() {
    assert.equal(null, largestNumber([]));
  });
});
