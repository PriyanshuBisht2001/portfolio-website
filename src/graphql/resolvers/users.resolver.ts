import dbConnect from "@/lib/db";
import User from "@/models/Users.mo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface LoginArgs {
  username: string;
  password: string;
}

const SECRET = process.env.JWT_SECRET || "jwt-secret";

const UserResolver = {
  mutation: {
    login: async (_parent: any, { username, password }: LoginArgs) => {
      try {
        await dbConnect();
        const user = await User.findOne({ username });
        if (!user) throw new Error("User not found");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Wrong password");
        return jwt.sign(
          { id: user._id, username: user.username, isAdmin: user.isAdmin },
          SECRET,
          { expiresIn: "1d" },
        );
      } catch (error) {}
    },
  },
};

export default UserResolver