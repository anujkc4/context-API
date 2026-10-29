import { useState } from "react";
import userContextProvider from "./context/userContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <userContextProvider>
      <div>hi</div>
    </userContextProvider>
  );
}

export default App;
