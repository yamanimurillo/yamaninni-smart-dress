import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hiddenDropdown }) => {
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
                    !currentUser ?
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link> :
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                }
                <CartIcon></CartIcon>
            </div>

            {hiddenDropdown ? null : <CartDropdown></CartDropdown>}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenDropdown: selectCartHidden
});

export default connect(mapStateToProps)(Header);