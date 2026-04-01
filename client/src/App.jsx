import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState({});
  const getData=async ()=>{
    try {
      let data = await fetch("http://34.57.31.183:3000/api/message");
    var res= await data.json();
    console.log(res)
    } catch (error) {
     console.log(error);
     var res ={data:"error at internal server"}
    }
    setCount(res)
  }
  useEffect(() => {
    getData();
  }, [])
  

  return (
    <>
      <h1>Hello from Frontend</h1>
      <p>{count.data}</p>
    </>
  )
}

export default App
