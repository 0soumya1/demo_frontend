import React, { useState } from "react";

const App = ()=>{
  const[flowers, setFlowers]= useState("");

  const url="https://backend-smoky-eight.vercel.app/";
  // const url1 = "http://localhost:5000/"

  const getFlowers = async ()=>{
    
        let result = await fetch(url+"flowers");
        result = await result.json();
       setFlowers(result);
  }
 console.log(flowers, "flowers")
  return(
     <div>
      <h2>dummy</h2>

      <button onClick={()=>getFlowers()}>Submit</button>
    {
     flowers&&flowers.map((item)=>{
      return(
        <ul>
          <li>{item.name}</li>
        </ul>
      )
     })
    } 
     
     </div>
  )
}

export default App;
