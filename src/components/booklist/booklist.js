import React from 'react'
import data from '../../booklist.json'
import { useEffect, useState } from "react";




export const Booklist = (props) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    useEffect (()=>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor")
        .then((res)=> res.json())
        .then(
            (result)=> {
            console.log(result)
            setItems(result.items)
            setLoading(true)
        });
    },[]);

    // const filtereditem = items.map((el) => {
    //     //if no input the return the original
    //     if (props.input === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })

    // if (!loading) {
    //     return <div>Loading...</div>;
    //   } else {

        // {loading ? <div> Loading...</div> : null }


        return (
            <div>
            {items.map((item)=>(
                < li key ={item.id}>  
                    title : {item.volumeInfo.title},
                    author : {item.volumeInfo.authors},
                    published: {item.volumeInfo.publishedDate},
                    {item.volumeInfo.readingModes.image}
                </li>
            ))}
        </div>
        )
    
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