import {useLocation, useNavigate} from "react-router";
import {Status} from "./Status";

export const TicketDetails = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    return <div>
        <div><button onClick={() => navigate(-1)}>Back</button></div>
        <div><h2>Ticket ID: {state.id}</h2></div>
        <div><p>Description: {state.description}</p></div>
        <div><p>Status: <Status status={state.status}/></p></div>
    </div>
}
