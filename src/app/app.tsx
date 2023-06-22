import React from "react";
import "./app.css";
import {Tickets} from "../components/Tickets";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TicketDetails} from "../components/TicketDetails";
import {ApiService} from "../api/service";
import {Layout} from "../components/Layout";
import {Dictionary} from "../components/Dictionary";
import {Map} from "../components/Map";
import { Wrapper } from "@googlemaps/react-wrapper";
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
            },
            {
                path: 'map',
                element: <Wrapper apiKey={process.env.REACT_APP_API_KEY as string}><Map center={{lat: 47, lng: 28}} zoom={8}/></Wrapper>
            }
        ]
    },
])

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;
