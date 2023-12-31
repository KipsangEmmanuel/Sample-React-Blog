import Home from './Home';
import NavBar from './NavBar';
import {Routes, Route, BrowserRouter, } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className='content'>
          {/* <Home /> */}
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
