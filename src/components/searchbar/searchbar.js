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
            props.setSearch(e.target.value);
            {
              /*called setter of the App state */
            }
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
