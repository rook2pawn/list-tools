var _ = require('./index.js')
var intersectionBy = require('lodash.intersectionby')
var deepEqual = require('deep-equal')

var a = [{a:1},{a:1}, {b:2}]
var b = [{a:1}, {c:3}]

console.log(_.intersection(a,b,deepEqual))
console.log(intersectionBy([a,b],deepEqual))
console.log(intersectionBy([2.1, 1.2,4.2,4.5], [4.3, 2.4,2], Math.floor))
