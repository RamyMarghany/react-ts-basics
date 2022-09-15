import React, { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type userContextProviderProps = {
  children: React.ReactNode;
};

type useContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as useContextType);

// Provider always receive a children as a parameter because it's a wrapper component, like a container component.
export const UserContextProvider = ({ children }: userContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
