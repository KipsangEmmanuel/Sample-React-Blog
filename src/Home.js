 import React, { useState } from 'react'
import BlogList from './BlogList';

 const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum...", author: "Emmanuel", id: 1 },
        { title: "Welome Party!", body: "lorem ipsum...", author: "Kipsang", id: 2 },
        { title: "Web dev dev top tips", body: "lorem ipsum...", author: "Arawa", id: 3 },

    ]);
   return (
     <div className='home'>
        <BlogList blogs={blogs} title="All Blogs!"/>

     </div>
   )
 }
 
 export default Home