import React, { useState } from "react";
import userContext from "./userContext";

export default function userContextProvider({ childern }) {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {childern}
    </userContext.Provider>
  );
}
