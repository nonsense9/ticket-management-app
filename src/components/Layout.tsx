import React from "react";
import {Outlet} from "react-router";
import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = () => {
    return <Container className="vh-100 p-0">
        <Header/>
        <div className="d-flex justify-content-center h-100"><Outlet/></div>
        <Footer/>
    </Container>
}
