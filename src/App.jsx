import { useState } from "react";
import UserContextProvider from "./context/userContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>hi</h1>
    </UserContextProvider>
  );
}

export default App;
