import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

export const Layout = () => {
    return <div>
        <div><Link to={'tickets'}>Tickets</Link></div>
        <div><Link to={'dictionary'}>Dictionary</Link></div>
        <div><Outlet/></div>
    </div>
}
