import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsuscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (user) => {

      console.log(user);
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

          /*this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });*/

        });
      }

      setCurrentUser(user)

      //this.setState({ currentUser: user })
    });
  };

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
            <Route path="/signin" element={this.props.currentUser ? <Navigate to='/'></Navigate> : <SignInPage></SignInPage>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchTpProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchTpProps)(App);
