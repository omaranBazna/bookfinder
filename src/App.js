import "./App.css";
import Searchbar from "./components/searchbar/searchbar";
import Booklist from "./components/booklist/booklist";
import { useState } from "react";
function App() {
  const [searched, setSearched] = useState("");
  return (
    <div className="App">
      <Searchbar search={searched} setSearch={setSearched} />
      <Booklist />
    </div>
  );
}

export default App;
