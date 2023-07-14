import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";

// import navbar from './components/Navbar.js'

function Prediction() {
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


//   let [username, setUsername] = React.useState("");
//   let [password, setPassword] = React.useState("");


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log('submitted')
  };

  //   Job Roles: Junior Software Engineer, Senior Software Engineer, Junior Data Engineer, Senior Data Engineer, Cloud Engineer, HR Professional
  // Locations: Hartford CT, St Paul MN, Hunt Valley MD, New York NY

  return (
    <>

    {/* <navbar /> */}
      <div>
        <h1>Please select Job Role</h1>
        <select>
          <option value="fruit">Junior Software Engineer</option>

          <option value="vegetable">Senior Software Engineer</option>

          <option value="meat">Junior Data Engineer</option>
          <option value="meat">Senior Data Engineer</option>
          <option value="meat">Cloud Engineer</option>
          <option value="meat">HR Professional</option>
        </select>

        <h1>Please select Work Location</h1>
        <select>
          <option value="fruit">Hartford, CT</option>
          <option value="vegetable">St Paul, MN</option>
          <option value="meat">Hunt Valley, MD</option>
          <option value="meat">New York, NY</option>
        </select>
        <div>
            <input type="submit" />
          </div>
      </div>
    </>
  );
}

export default Prediction;
