import Home from './Home';
import NavBar from './NavBar';
import {Routes, Route, BrowserRouter, } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className='content'>
          {/* <Home /> */}
          <Routes>
            <Route path="/home" element={<Home />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
