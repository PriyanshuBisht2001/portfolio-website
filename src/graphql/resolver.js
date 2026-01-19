import dbConnect from "../lib/db";
import Contact from "../models/Contact";

const resolver = {
  Query: {
    _health: () => "OK",
  },

  Mutation: {
    submitContactForm: async (parent, { input }) => {
      await dbConnect();
      const alreadyContacted = await Contact.findOne({ email: input.email });
      if (alreadyContacted) {
        throw new Error("You already Contacted with this email");
      } else {
        return Contact.create(input);
      }
    },
  },
};

export default resolver;
