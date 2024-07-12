import {NavBar} from "../../components/layout/navbar/NavBar";
import {SideBar} from "../../components/layout/sidebar/SideBar";
import {Content} from "../../components/layout/content/Content";
import {Footer} from "../../components/layout/footer/Footer";
import React from "react";
import {BlogBrowser} from "../../features/blog/BlogBrowser";

export const HomePage = ({}) => {
    return (
        <>
            <div className="container">
                <NavBar></NavBar>
                <Content>
                    <BlogBrowser></BlogBrowser>
                </Content>
                <SideBar></SideBar>
                <Footer></Footer>
            </div>
        </>
    );
}