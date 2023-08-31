import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const App = ()=>{
  const[flowers, setFlowers]= useState("");

  const BASE_URL="https://backend-smoky-eight.vercel.app/";
  // const url1 = "http://localhost:5000/"

  const getFlowers = ()=>{
    
//         let result = await fetch(url+"flowers");
//         result = await result.json();
//        setFlowers(result);
let url = BASE_URL + "flowers"
axios.get(url).then((res)=>{
  console.log(res,"response from api")
     if (res.data) {
        setFlowers(res.data)
      } else {
        toast.error("error in getting Items");
      }
}).catch((err)=>{
  console.log(err,"error in api call")
})
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
     <Toaster/>
     </div>
  )
}

export default App;
