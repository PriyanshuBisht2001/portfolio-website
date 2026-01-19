import { SUBMIT_CONTACT_FORM } from "@/gql/mutation";

export const submitContactForm = async (props: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const { firstName, lastName, email, phone, message } = props;
  const payload = {
    query: SUBMIT_CONTACT_FORM,
    variables: {
      input: { firstName, lastName, email, phone, message },
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  return {
    ...result.data.submitContactForm,
    success: true,
  };
};
