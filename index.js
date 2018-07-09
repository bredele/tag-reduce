
module.exports = ([literals, ...data], map =  arg => arg) => {
  return literals.reduce((accumulator, value, idx) => {
    return accumulator +  map(data[idx - 1]) + value
  })
}
