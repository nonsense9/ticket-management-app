import {useLocation, useNavigate} from "react-router";
import {Status} from "./Status";
import {ApiService, Ticket} from "../api";
const apiService = new ApiService();

export const TicketDetails = () => {
    const {state} = useLocation();
    const navigate = useNavigate();

    return <div>
        <div><button onClick={() => navigate(-1)}>Back</button></div>
        <div><h2>Ticket ID: {state.id}</h2></div>
        <div><p>Description: {state.description}</p></div>
        <div><p>Status: <Status completed={state.completed}/></p></div>
        <div><button onClick={() => {
            apiService.complete(state.id)
        }}>Complete</button></div>
    </div>
}
