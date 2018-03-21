module.exports = `
  type Query {
    hello: String,
    getDie(numSides: Int): RandomDie

  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
`