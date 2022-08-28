import React from 'react'
import "./searchbar.css"

function Searchbar() {
  return (
    <div> 
     <form>
        <input
            type ="text"
            placeholder="Search your book"
        /> 
        <button type="submit">Search</button>
     </form>
    </div>
  )
}





export default Searchbar