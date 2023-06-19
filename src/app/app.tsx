import React from "react";
import "./app.css";
import {Tickets} from "../components/Tickets";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TicketDetails} from "../components/TicketDetails";
import {ApiService} from "../api/service";
import {Layout} from "../components/Layout";
import {Dictionary} from "../components/Dictionary";

const apiService = new ApiService();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'tickets',
                element: <Tickets apiService={apiService}/>,
                children: [{
                    path: ':id',
                    element: <TicketDetails/>
                }]
            },
            {
                path: 'dictionary',
                element: <Dictionary/>
            }
        ]
    },
])

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;
