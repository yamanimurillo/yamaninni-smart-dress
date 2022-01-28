import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
