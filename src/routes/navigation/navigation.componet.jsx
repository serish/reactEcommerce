import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => (
<Fragment>
    <div className="navigation">
        <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about">ABOUT</Link>
            <Link className="nav-link" to="/sign-in">SIGN IN</Link>
        </div>
    </div>
    <Outlet />
</Fragment>)

export default Navigation;