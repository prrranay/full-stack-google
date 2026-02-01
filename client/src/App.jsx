import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState({});
  const getData=async ()=>{
    try {
      let data = await fetch("http://localhost:3000/api/message");
    var res= await data.json();
    console.log(res)
    } catch (error) {
     console.log(error);
     var res ={data:"error at server"}
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
