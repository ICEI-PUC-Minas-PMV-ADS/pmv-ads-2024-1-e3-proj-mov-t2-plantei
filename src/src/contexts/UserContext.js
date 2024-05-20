import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);
}
