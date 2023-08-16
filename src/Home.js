 import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

 const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("Arawa");

    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
         .then(res => {
           return res.json()
         })
         .then(data => {
            console.log(data)
            setBlogs(data)
         })
    }, [name]);

   return (
     <div className='home'>
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        <button onClick={() => setName("Emmanuel")}>Change Name</button>
        <p>{ name }</p>
     </div>
   )
 }
 
 export default Home