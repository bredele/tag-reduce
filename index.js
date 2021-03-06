
/**
 * Reduce template literals to a single value
 * with optional mapping callback.
 *
 * @param {Array} template literals
 * @param {Function?} map
 * @api public
 */

module.exports = (map = arg => arg) => {
  return (literals, ...data) => {
    return literals.reduce((accumulator, value, idx) => {
      return accumulator + map(data[idx - 1]) + value
    })
  }
}
