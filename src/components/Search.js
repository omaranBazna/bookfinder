import React from "react";
import { useState } from "react";
const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for Book"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
