import React, { useState } from "react";

const App = ()=>{
  const[flowers, setFlowers]= useState("");

  // const url="https://backend-smoky-eight.vercel.app/";

  const getFlowers = async ()=>{
    
        let result = await fetch("http://localhost:5000/flowers");
        result = await result.json();
       setFlowers(result);
  }
 console.log(flowers, "flowers")
  return(
     <div>
      <h2>dummy</h2>
      {
     flowers.map((item)=>{
      return(
        <ul>
          <li>{item.name}</li>
        </ul>
      )
     })
    } 
      <button onClick={getFlowers}>Submit</button>
     </div>
  )
}

export default App;
