module.exports = `
  type Query {
    hello: String,
    getDie(numSides: Int): RandomDie
    getMessage(id: ID!): Message
  }

  input MessageInput {
    content: String
    author: String
  }
  
  type Message {
    id: ID!
    content: String
    author: String
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
`