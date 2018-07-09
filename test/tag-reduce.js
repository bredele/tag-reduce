/**
 * Dependencie(s)
 */

const test = require('tape')
const reduce = require('..')

test('should concatenate template literals', assert => {
  assert.plan(1)
  assert.equal(
    reduce([['hello ', ''], 'world']),
    'hello world'
  )
})

test('should concatenate complex template literals', assert => {
  assert.plan(1)
  assert.equal(
    reduce([['hello ', ' and ', '!'], 'world', 'universe']),
    'hello world and universe!'
  )
})
