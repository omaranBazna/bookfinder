import React from "react";
import data from "../../booklist.json";
import { useEffect, useState } from "react";

export const Booklist = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  function scoring(el1, el2) {
    let score = 0;
    for (let char of el1) {
      if (el2.includes(char)) {
        score++;
        if (el1.indexOf(char) == el2.indexOf(char)) {
          score++;
        }
      }
    }
    return score / (el1.length + el2.length);
  }
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.items[0]);
        setItems(result.items);
        setLoading(true);
      });
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          {items.map((item) => (
            <li key={item.id}>
              {item.volumeInfo.title}
              {item.authors}
              {item.publishedDate}
              {item.image}
            </li>
          ))}

          <div></div>
          <hr></hr>
          {items
            .filter((item) => {
              return scoring(item.volumeInfo.title, props.search) > 0.4;
            })
            .map((item) => (
              <li key={item.id}>
                {item.volumeInfo.title}
                {item.authors}
                {item.publishedDate}
                {item.image}
              </li>
            ))}

          <div>{props.search /*value from App state*/}</div>
        </div>
      </>
    );
  }
};
/*
list 
variable 

we need to filter the list so only the matching elements with the variable 

"apple"

{

  pun:
  {


  }

  asd:{

  }
}


///adding filters [user may choose more than filter ,may choose only one filter]


///Freedom's Orator

//free's Orator
//freedom  Ortor ===

/*

filter ///

matching  every two elements  ///element in the list ,searched element 

count every alpha in the strings /inspi 

///stander for alphabet occurance mesument 
{
  f:1,
  r:1,
  e:2,

}
{
  f:1,
  r:1,
  e:2,
  
}

score = 50%


order:
to which index they share

score

100%
0%


*/

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

export default Booklist;
