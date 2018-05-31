class Calculator {
  add(a, ...args) {
    let result = a
    for (let arg of args) {
      result += arg
    }
    return result
  }
  // add(a, b) {
  //   return a + b
  // }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a / b
  }

  // add = (a, b) => {
  //   return a + b
  // }
  //
  // subtract = (a, b) => {
  //   return a - b
  // }
}



//
// Same as above
//
// function add(a, b) {
//
// }
//
// const add = function(a, b) {
//
// }

module.exports = { Calculator }
