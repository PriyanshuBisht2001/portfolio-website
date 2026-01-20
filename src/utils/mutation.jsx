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
