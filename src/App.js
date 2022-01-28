import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ShopPage from './pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
