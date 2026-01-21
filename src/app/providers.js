"use client";

import { ApolloProvider } from "@apollo/client/react";
import { client } from "@/lib/apolloClient";
import { AuthProvider } from "@/contexts/AuthContext";

export function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  );
}
