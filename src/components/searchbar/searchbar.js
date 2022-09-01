import React from 'react'
import "./searchbar.css"
import { useState } from "react";



function Searchbar() {
const [data, setData] = useState('');

const handleSubmit = event => {
    event.preventDefault();
}

  return (
    <div> 
     <form onSubmit={handleSubmit}>
        <input
            type ="text"
            placeholder="Search your book"
            onChange={event=> setData(event.target.value)}
            value={data}
        /> 
        <button type="submit">Search</button>
     </form>
    </div>
  )
}





export default Searchbar