
import './App.css';
import Home from "./Page/Home"
import RoomList from './Page/RoomList';
import TotalAmount from './Page/TotalAmount';
import React from 'react';
import { Route, Routes,BrowserRouter} from "react-router-dom";
import Navigation from './Component/Navigation';
 
 function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/TotalAmount" element={<TotalAmount />} />
          <Route path="/RoomList" element={<RoomList />} />

        </Routes>
     <Navigation/> 
      </div>
    </BrowserRouter>
  );
}

export default App;
 
