import dbConnect from "@/lib/db";
import User from "@/models/Users.mo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthArgs {
  username: string;
  password: string;
}

const SECRET = process.env.JWT_SECRET!;

const UserResolver = {
  Mutation: {
    register: async (_: unknown, { username, password }: AuthArgs) => {
      await dbConnect();

      const existing = await User.findOne({ username });
      if (existing) throw new Error("User already exists");

      const hashed = await bcrypt.hash(password, 10);
      return User.create({ username, password: hashed });
    },

    login: async (_: unknown, { username, password }: AuthArgs) => {
      await dbConnect();

      const user = await User.findOne({ username });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid password");

      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        SECRET,
        { expiresIn: "1d" }
      );

      return {
        token,
        user,
      };
    },
  },
};

export default UserResolver;
