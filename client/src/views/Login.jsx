import React, { useState } from "react";
import "./login.css";
import codng from "../images/Coding _Monochromatic.png";
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
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6 text-center">
          <img src={codng} alt="" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h1>SIGN IN</h1>
          <form onSubmit={handleSubmit} className="pb-4 pt-3 px-3 ">
            <div className="my-2">
              <label>
                <p>Email</p>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="my-2">
              <label>
                <p>Password</p>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
