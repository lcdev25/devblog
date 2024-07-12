import {Link} from "react-router-dom";
import React from "react";

export const BlogBrowser = () => {
    return (
        <>
            <div>List of blogs for you available here</div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signout">Sign Out</Link>
        </>
    );
}