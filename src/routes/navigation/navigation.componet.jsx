import {React, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
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
                <Link className="nav-link" to="/about">ABOUT</Link>
                {currentUser ? (<Link className="nav-link" to="/auth" onClick={signOutUser}>SIGN OUT</Link>):(<Link className="nav-link" to="/auth">SIGN IN</Link>)}
            </div>
        </div>
        <Outlet />
    </Fragment>)
}

export default Navigation;