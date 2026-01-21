"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type AuthContextType = {
  isAdmin: boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  loading: true,
});

interface TokenPayload {
  isAdmin: boolean;
  exp: number;
  iat: number;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        setIsAdmin(decoded.isAdmin);
      } catch (error) {
        console.error("Failed to decode token", error);
        setIsAdmin(false);
      }
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
