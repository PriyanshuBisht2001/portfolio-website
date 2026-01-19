const typeDefs = `
type Query {
    _health: String
}

type Contact {
    _id: ID!
    firstName: String!
    lastName: String
    email: String!
    phone: String!
    message: String
}
    
type Mutation {
    submitContactForm(input: UserInput!): Contact
}

input UserInput {
    firstName: String!
    lastName: String
    email: String!
    phone: String!
    message: String
}
`;

export default typeDefs;
