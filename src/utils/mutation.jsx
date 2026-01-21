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
  register(username: "priyanshu", password: "priyanshu@hexa123") {
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
