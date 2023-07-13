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
  let [empID, setEmpID] = React.useState("");
  let [phoneNumber, setPhoneNumber] = React.useState("");
  let [jobRole, setJobRole] = React.useState("");
  let [WorkLocation, setWorkLocation] = React.useState("");
  let [salary, setSalary] = React.useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(empID);
    console.log(phoneNumber);
    console.log(jobRole);
    console.log(WorkLocation);
    console.log(salary);

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
          <label>Name </label>
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

        <div className="input-container">
          <label>Enter your ID </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setEmpID(e.target.value)}
          />

          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Phone Number </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <div className="input-container">
            <label>JobRole </label>
            <input
              type="text"
              name="uname"
              required
              onChange={(e) => setJobRole(e.target.value)}
            />

            <div className="input-container">
              <label>Work Location</label>
              <input
                type="text"
                name="uname"
                required
                onChange={(e) => setWorkLocation(e.target.value)}
              />

              <div className="input-container">
                <label>Salary </label>
                <input
                  type="text"
                  name="uname"
                  required
                  onChange={(e) => setSalary(e.target.value)}
                />

                {renderErrorMessage("uname")}
              </div>

              {renderErrorMessage("uname")}
            </div>

            {renderErrorMessage("uname")}
          </div>

          {renderErrorMessage("uname")}
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
        <div className="title">Register</div>
        {isSubmitted ? <div>User successfully registered</div> : renderForm}
        <Link to="/Login"> Login </Link>
      </div>
    </div>
  );
}

export default Login;
