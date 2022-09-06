import React from 'react'
import "./searchbar.css"
import { useState } from "react";
import Booklist from "../booklist/booklist"


function Searchbar(props) {
const [book, setBook] = useState('');



const handleSubmit = event => {
    event.preventDefault();
}

  return (
    <div> 
     <form onSubmit={handleSubmit}>
        {/* <Booklist input={book} */}
            <input
            type ="text"
            placeholder="Search your book"
            onChange={event=> setBook(event.target.value)}
            value={book}
        /> 
        <button type="submit">Search</button>
        {/* <Booklist/> */}
     </form>
    </div>
  )
}





export default Searchbar