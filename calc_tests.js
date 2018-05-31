const assert = require('assert')
const { Calculator } = require('./calculator.js')

const c = new Calculator

describe("Add", () => {
  it("Should add two numbers together", () => {
    // eg. add(1,2) should equal 3
    assert.equal(15, c.add(1,2,3,4,5))
    assert.equal(5, c.add(3,2))
  })
})

describe("Subtract", () => {
  it("Should subtract two numbers", () => {
    // eg subtract(10, 6) should be 4
    assert.equal(4, c.subtract(10, 6))
  })
})

describe("Divide", () => {
  it("Should divide two numbers", () => {
    // eg divide(8, 4) should be 2
    assert.equal(2, c.divide(8, 4))
  })
})
