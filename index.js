
module.exports = ([literals, ...data]) => {
  return literals.reduce((accumulator, value, idx) => {
    return accumulator +  data[idx - 1] + value
  })
}
