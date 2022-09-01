import React from 'react'
import data from '../../booklist.json'
import { useEffect, useState } from "react";




export const Booklist = (props) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect (()=>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor")
        .then((res)=> res.json())
        .then(
            (result)=> {
            setItems(result)
            setLoading(false)
        });
    },[]);

    if (loading) {
        return <div>Loading...</div>;
      } else {

        // {loading ? <div> Loading...</div> : null }
        return (
            <div>
            {items.map((item)=>(
                < li key ={item.id}>  
                    title : {item.title},
                    author : {item.authors},
                    published: {item.publishedDate},
                    {item.image}
                </li>
            ))}
        </div>
        )
    }
}



// function Booklist(props) {
//   return (
//     <div>
//         {data.map((item)=>(
//             < li key ={item.id}>  
//                 {item.title} 
//                 {item.author}
//                 {item.image}
//             </li>
//         ))}
//     </div>
//   )
// }




export default Booklist