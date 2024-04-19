import React, { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = ({ onsearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    onsearch(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="me-2">
          <strong>Find User:</strong>
        </label>
        <input
          type="text"
          placeholder="Enter a github username"
          className="me-2"
          required
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
