/**
 * Dependencie(s)
 */

const test = require('tape')
const reduce = require('..')

test('should concatenate template literals', assert => {
  assert.plan(1)
  const template = reduce()
  assert.equal(
    template(['hello ', ''], 'world'),
    'hello world'
  )
})

test('should concatenate complex template literals', assert => {
  assert.plan(1)
  const template = reduce()
  assert.equal(
    template(['hello ', ' and ', '!'], 'world', 'universe'),
    'hello world and universe!'
  )
})

test('should map template literal chunk with function', assert => {
  assert.plan(1)
  const template = reduce(data => data.toUpperCase())
  assert.equal(
    template(['hello ', ''], 'world'),
    'hello WORLD'
  )
})

test('should return tagged template function', assert => {
  assert.plan(1)
  const query = reduce(data => data.toUpperCase())
  const who = 'world'
  assert.equal(query`hello ${who}`, 'hello WORLD')
})
