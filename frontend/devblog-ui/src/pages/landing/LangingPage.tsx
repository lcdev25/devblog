import {NavBar} from "../../components/layout/navbar/NavBar";
import {SideBar} from "../../components/layout/sidebar/SideBar";
import {Content} from "../../components/layout/content/Content";
import {Footer} from "../../components/layout/footer/Footer";
import React from "react";

export const LandingPage = ({}) => {
    return (
        <>
            <div className="container">
                <NavBar></NavBar>
                <Content>Nothing</Content>
                <SideBar></SideBar>
                <Footer></Footer>
            </div>
        </>
    );
};