 import React, { useState } from 'react'

 const Home = () => {
    // let name = "Kipsang"
    const [name, setName] = useState("Emmanuel")
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName("Kipsang");
        setAge(30);
    }
   return (
     <div className='home'>
        <h2>Home Page</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>Click me</button>
     </div>
   )
 }
 
 export default Home