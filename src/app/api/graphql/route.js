import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(req) {
  return handler(req);
}

export async function POST(req) {
  return handler(req);
}
