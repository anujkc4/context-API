import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="w-full p-4 bg-rose-900 text-amber-300">login</h2>
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="enter your name"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-amber-900 text-whitd px-4 py-1 rounded-lg active:scale-95 transition duration-200"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
