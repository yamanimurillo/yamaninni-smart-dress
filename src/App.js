import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
 
    this.state = {
      currentUser: null
    };
  };

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user});
    });
  };

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
            <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
