import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
    const navigate = useNavigate();


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(username);
    console.log(password);

    navigate("/search", { replace: true });

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Enter your ID </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <Link to="/Register"> Register </Link>
      </div>
    </div>
  );
}

export default Login;
