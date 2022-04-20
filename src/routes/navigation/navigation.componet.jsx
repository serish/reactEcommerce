import {React, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    //console.log(currentUser);

    // const signOutHandler = async() =>{
    //     await signOutUser();
    //     //setCurrentUser(null);
    // }
    return(
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/shop">SHOP</Link>
                {currentUser ? (<Link className="nav-link" to="/auth" onClick={signOutUser}>SIGN OUT</Link>):(<Link className="nav-link" to="/auth">SIGN IN</Link>)}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />} 
        </div>
        <Outlet />
    </Fragment>)
}
// {isCartOpen && <CartDropDown />} is equivalant to check truthiness of both values if true return second.
export default Navigation;