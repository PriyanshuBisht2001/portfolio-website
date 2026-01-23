export const SUBMIT_CONTACT_FORM = `
  mutation SubmitContactForm($input: UserInput!) {
    submitContactForm(input:$input) {
      firstName
      lastName
      email
      phone
      message
    }
  }
`;

export const REGISTER = `
mutation {
  register(username: "priyanshu", password: "priyanshu") {
    id
    username
    isAdmin
  }
}
`;

export const LOGIN = `
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      username
      isAdmin
    }
  }
}
`;

export const ADD_PROJECT = `
  mutation AddProject($input: ProjectInput!) {
    addProject(input:$input) {
      type
      name 
      heroImage 
      overview 
      challenge 
      photos 
      details 
      url 
      category 
    }
 }
`;

export const UPDATE_PROJECT = `
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject($input: input) {
      name 
      heroImage 
      overview 
      challenge 
      photos 
      details 
      url 
    }
  }
`