import React, { useState } from "react";
import UserContext from "./userContext";

export default function UserContextProvider({ childern }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
}
