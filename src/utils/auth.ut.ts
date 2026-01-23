import jwt from "jsonwebtoken";
import User from "@/models/Users.mo";
import dbConnect from "@/lib/db";

const SECRET = process.env.JWT_SECRET || "secret123";

export const verifyAdmin = async (token?: string) => {
  if (!token) throw new Error("Unauthorized: No token");

  await dbConnect();
  const decoded = jwt.verify(token, SECRET) as { id: string };
  const user = await User.findById(decoded.id);

  if (!user || !user.isAdmin) throw new Error("Forbidden: Not an admin");

  return user;
};
