import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ username }) => {
  let myUserName = username || "vinnow98";
  const myClientId = "e3bf4d2f266107944b8e";
  const myClientSecret = "42f7c7f04381fb0ffae4d4febbebcb54987f325e";
  const [data, getData] = useState(null);
  const [repos, getRepos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.github.com/users/${myUserName}?client_id=${myClientId}&client_secret=${myClientSecret}&sort=created`
      )
      .then((result) => {
        getData(result.data);
        if (result.data) {
          axios
            .get(
              `https://api.github.com/users/${myUserName}/repos?client_id=${myClientId}&client_secret=${myClientSecret}&sort=created`
            )
            .then((reposResult) => {
              getRepos(reposResult.data);
            })
            .catch((reposError) => {
              console.log(reposError.message);
            });
        }
      })
      .catch((err) => {
        getData(null);
        console.log(err.message);
      });
  }, [myUserName]);

  return (
    <div className="d-flex flex-column shadow p-4 rounded">
      {data ? (
        <div className="d-flex">
          <img src={data.avatar_url} alt="mylogo" className="col-4 me-3" />
          <div>
            <div className="border rounded p-1 mb-1 ">
              <strong>Full Name: </strong>
              {data.name}
            </div>
            <div className="border rounded p-1 mb-1">
              <strong>Username: </strong>
              {data.login}
            </div>
            <div className="border rounded p-1 mb-1">
              <strong>Location: </strong>
              {data.location}
            </div>
            <div className="border rounded p-1">
              <strong>Email Address: </strong>
              {data.email}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-danger">No User Found!</div>
      )}
      {data && (
        <div className="mt-5">
          <strong>User Repositories:</strong>
          <div className="d-flex flex-column">
            {repos.map((repo, index) => (
              <a
                href={repo.html_url}
                key={index}
                className="text-decoration-none link-opacity-50-hover"
              >
                {repo.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
