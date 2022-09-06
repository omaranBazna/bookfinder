import "./App.css";
import Searchbar from "./components/searchbar/searchbar";
import Booklist from "./components/booklist/booklist";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [searched, setSearched] = useState(""); ///*App state*/

  return (
    <div className="App">
      <Searchbar search={searched} setSearch={setSearched} />{" "}
      {/* pass the setter and value to searchbar as props*/}
      <Booklist search={searched} />{" "}
      {/*pass the value to the book list as props */}
    </div>
  );
}

export default App;
