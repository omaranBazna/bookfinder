
import './App.css';
import Searchbar from "./components/searchbar/searchbar"
import Booklist from "./components/booklist/booklist"

function App(props) {
  const [searchString, setSearchString]=useState('')
  const [serchParam] = useState('')
  const [filterParam, setFilterParam] = useState(["All"]);
  

  
  return (

    <div className="App">
      <Searchbar/>
      <Booklist/>
    </div>

  );

}

export default App;
