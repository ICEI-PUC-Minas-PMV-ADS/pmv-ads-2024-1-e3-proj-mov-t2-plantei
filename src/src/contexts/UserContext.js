import React, { createContext, useState } from 'react';
import { deleteUserAccount, updateUser, updatePassword, changePassword } from "../services/AuthService";

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

  const updateUserProfile = async (data) => {
    if (user) {
      const updatedUser = await updateUser(user.id, data);
      setUser(updatedUser);
    }
  };

  const updatePassword = async ({ oldPassword, newPassword }) => {
    if (user) {
      await changePassword(user.id, oldPassword, newPassword);
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, logout, deleteUser, updateUserProfile, updatePassword }}>
      {children}
    </UserContext.Provider>
  );
};
