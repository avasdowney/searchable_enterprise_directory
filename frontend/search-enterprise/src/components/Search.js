import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

function Search(props) {
  let [search, setSearch] = React.useState("");

  let [name, setName] = React.useState("");
  let [id, setID] = React.useState("");
  let [phone, setPhone] = React.useState("");
  let [job, setJob] = React.useState("");
  let [work, setWork] = React.useState("");
  let [salary, setSalary] = React.useState("");

  const location = useLocation()
  // console.log(location.state.name)

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await fetch(`http://localhost:4000/Employee/${search}`)
      .then((data) => {
        // console.log(data.json())
        return data.text();
      })
      .then((res) => {
        console.log(res);
        let parse = JSON.parse(res);
        let name = parse[0].name;
        let id = parse[0].employee_id;
        let phone = parse[0].phone_number;
        let job = parse[0].job_role;
        let work = parse[0].work_location;
        let salary = parse[0].salary;
        
        setName(name);
        setID(id);
        setPhone(phone);
        setJob(job);
        setWork(work);
        setSalary(salary);
      });
  };

  return (
    <>
      <h1>Employee Directory</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Employee ID"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <input type="submit" />
          </div>
          <p>{name}</p>
          <p>{id}</p>
          <p>{phone}</p>
          <p>{job}</p>
          <p>{work}</p>
          <p>{salary}</p>
        </form>
        <Link to="/prediction"> Get salary prediction </Link>

      </div>
    </>
  );
}

export default Search;
