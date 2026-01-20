
const userTypeDefs = `
  type User {
    id: ID!
    username: String!
    isAdmin: Boolean
  }

  extend type Mutation {
    register(username: String!, password: String!): User
  }
`;

export default userTypeDefs