import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

import { auth } from '../../firebase/firebase.utils';

const Header = (props) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>

                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    !props.currentUser ?
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link> :
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                }

            </div>
        </div>
    );
};

export default Header;