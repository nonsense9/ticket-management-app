import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Header} from "./Header";
export const Layout = () => {
    return <Container className="p-3 vh-100">
        <Header/>
        <div className="d-flex justify-content-center"><Outlet/></div>
    </Container>
}
