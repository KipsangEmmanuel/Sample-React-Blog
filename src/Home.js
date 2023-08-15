 import React, { useState } from 'react'

 const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum...", author: "Emmanuel", id: 1 },
        { title: "Welome Party!", body: "lorem ipsum...", author: "Kipsang", id: 2 },
        { title: "Web dev dev top tips", body: "lorem ipsum...", author: "Arawa", id: 3 },

    ]);
   return (
     <div className='home'>
        {blogs.map((blog) => (
            <div className='blog-preview' key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>

            </div>
        ))}

     </div>
   )
 }
 
 export default Home