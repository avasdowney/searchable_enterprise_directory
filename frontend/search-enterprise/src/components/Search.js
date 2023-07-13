import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Search() {
  let [search, setSearch] = React.useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(search);
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
        </form>
      </div>
    </>
  );
}

export default Search;
