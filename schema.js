module.exports = `
  ${/*! Querying the database, no changes
    */ ''}
  type Query {
    ${/*Hello World*/ ''}
    hello: String,

    ${/*This is the simple version*/ ''}
    rollDice(numDice: Int!, numSides: Int): [Int],

    ${/*This is the more complex version*/ ''}
    getDie(numSides: Int): RandomDie,

    ${/*This is the database display
        ID here is a data type specific to graphql
      */ ''}
    getMessage(id: ID!): Message
  }

  input MessageInput {
    content: String,
    author: String
  }
  
  type Message {
    id: ID!,
    content: String,
    author: String
  }

  ${/*! Changing the database*/ ''}
  type Mutation {
    createMessage(input: MessageInput): Message,
    updateMessage(id: ID!, input: MessageInput): Message,
    deleteMessage(id: ID!): String
  }

  type RandomDie {
    ${/*! means required*/ ''}
    numSides: Int!,
    rollOnce: Int!,
    roll(numRolls: Int!): [Int]
  }
`