import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

interface SubmitContactInput {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  message?: string;
}

interface SubmitContactArgs {
  input: SubmitContactInput;
}

const ContactResolver = {
      Mutation: {
        submitContactForm: async (_parent: any, { input }: SubmitContactArgs) => {
          try {
            await dbConnect();
            const contact = await Contact.create(input);
            return contact;
          } catch (err) {
            console.error("submitContactForm error:", err);
    
            if (err instanceof Error) {
              throw new Error(err.message);
            }
    
            throw new Error("Failed to submit contact form");
          }
        },
      }
}

export default ContactResolver;
