import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "@/graphql/schemaGql";
import resolvers from "@/graphql/resolver";

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
