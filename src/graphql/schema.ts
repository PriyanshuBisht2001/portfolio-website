import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import BaseDef from "./typeDefs/base.def";
import userTypeDefs from "./typeDefs/users.def";
import contactTypeDefs from "./typeDefs/contacts.def";
import UserResolver from "./resolvers/users.resolver";
import ContactResolver from "./resolvers/contacts.resolver";

export const typeDefs = mergeTypeDefs([
  BaseDef,
  userTypeDefs,
  contactTypeDefs,
]);
export const resolvers = mergeResolvers([
  UserResolver,
  ContactResolver,
]);
