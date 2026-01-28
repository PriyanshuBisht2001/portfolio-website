import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs, resolvers } from "@/graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
    // @ts-expect-error next
    context: async (req) => {
      const auth = req.headers.get("authorization");
      const token = auth?.split(" ")[1];
      return { token };
    },}
  );

export async function GET(req) {
  return handler(req);
}

export async function POST(req) {
  return handler(req);
}
