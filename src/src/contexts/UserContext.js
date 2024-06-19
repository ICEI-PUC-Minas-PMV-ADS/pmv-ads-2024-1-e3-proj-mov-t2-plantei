// UserContext.js
import React, { createContext, useState } from 'react';
import { deleteUserAccount } from "../services/AuthService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  const deleteUser = async () => {
    if (user) {
      await deleteUserAccount(user.id);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
