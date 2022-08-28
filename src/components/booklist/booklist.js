import React from 'react'
import data from '../../booklist.json'


export const Booklist = (props) => {
  return (
    <div>
        {data.map((item)=>(
            < li key ={item.id}>  
                {item.title} 
                {item.author}
                {item.image}
            </li>
        ))}
    </div>
  )
}


export default Booklist