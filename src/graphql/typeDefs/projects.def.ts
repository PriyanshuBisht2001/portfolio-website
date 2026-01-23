const projectTypeDefs = `
  type Project {
    id: ID!
    name: String!
    heroImage: String
    overview: String
    challenge: String
    photos: [String!]
    details: [String!]
    url: String
  }

  input ProjectInput {
      name: String!
      heroImage: String
      overview: String
      challenge: String
      photos: [String!]
      details: [String!]
      url: String

  }

  input UpdateProjectInput {
    id: ID!
    name: String
    heroImage: String
    overview: String
    challenge: String
    photos: [String!]
    details: [String!]
    url: String
  }

  extend type Mutation {
    addProject(input: ProjectInput!): Project
    deleteProject(id: ID!): Boolean
    updateProject(input: UpdateProjectInput!): Project
  }
`;

export default projectTypeDefs;
