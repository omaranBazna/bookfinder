import React from "react";
import "./searchbar.css";

function Searchbar(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search your book"
          value={props.search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
