import { gql } from "@apollo/client";

export const SUBMIT_CONTACT_FORM = gql`
  mutation submitContactForm($input: UserInput!) {
    submitContact(input:$input) {
      firstName
      lastName
      email
      phone
      message
    }
  }
`;
