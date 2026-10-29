import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const handleSubmit = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  };
  return (
    <div>
      <h1 className="text-center bg-rose-900 p-4 text-amber-300"> Login</h1>
      <input value={username} type="text" placeholder="enter your name" />
      <input value={password} type="password" placeholder="password" />
      <button onClick={handleSubmit}></button>
    </div>
  );
}

export default Login;
