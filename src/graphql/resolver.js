import dbConnect from "../lib/db";
import Contact from "../models/Contact";

const resolver = {
  Query: {
    _health: () => "OK",
  },

  Mutation: {
    submitContactForm: async (_parent, { input }) => {
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
  },
};

export default resolver;
