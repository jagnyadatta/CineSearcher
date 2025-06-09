import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => (
  <div className="flex h-40 w-full justify-center bg-red-500">
    <div className="w-90 mt-4 flex h-10 items-center rounded-md border-2 bg-white p-2">
      <FontAwesomeIcon className="w-5 text-gray-500" icon={faSearch} />
      <input
        className="outline-none ml-2 h-6 w-full"
        placeholder="Enter Movie Name"
        type="text"
      />
    </div>
  </div>
);

export default Home;
