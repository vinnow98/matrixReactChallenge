import React, { useState } from "react";
import Template from "./Details";
import Searchbar from "./Searchbar";

const App = () => {
  const [username, getUsername] = useState();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5 ">
      <Searchbar onsearch={getUsername} />
      <Template username={username} />
    </div>
  );
};

export default App;
