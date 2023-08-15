 import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

 const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum...", author: "Emmanuel", id: 1 },
        { title: "Welome Party!", body: "lorem ipsum...", author: "Kipsang", id: 2 },
        { title: "Web dev dev top tips", body: "lorem ipsum...", author: "Arawa", id: 3 },
        { title: "Another Website", body: "lorem ipsum...", author: "Emmanuel", id: 4 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect(() => {
        console.log("Use effect running")
        console.log(blogs)
    });

   return (
     <div className='home'>
        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
     </div>
   )
 }
 
 export default Home