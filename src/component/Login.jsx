import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <div>
      <h2 className="w-full p-4 bg-rose-900 text-amber-300">login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="enter your name"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
