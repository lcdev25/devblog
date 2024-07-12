import "../../../assets/lcdev_logo.png"
import {useAuth} from "../../../context/AuthContext";
import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {

    const {isAuthenticated, logout} = useAuth();

    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img alt="Logo"/>
                    <span className="name">OOMBLOG</span>
                </div>
                <nav className="nav-items">
                    <ul>
                        {isAuthenticated ? (
                            <>
                                <li><Link to="/editblog">Write</Link></li>
                                <li><Link to="/notifications">Notifications</Link></li>
                                <li><Link to="/editprofile">Profile</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/signin">Sign in</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
}