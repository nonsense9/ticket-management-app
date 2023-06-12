import React from "react";
import "./app.css";
import {Tickets} from "../components/Tickets";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TicketDetails} from "../components/TicketDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Tickets/>
    },
    {
        path: ':id',
        element: <TicketDetails/>
    }
])

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;
