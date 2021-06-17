import React, { useState } from "react";
import "./login.css";

async function loginUser(credentials) {
  return fetch("https://ayodhya-dev.qlue.id/api/auths/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
      fcm_token: 123,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column p-3">
        <label>
          <p>Email</p>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="mb-3">
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
