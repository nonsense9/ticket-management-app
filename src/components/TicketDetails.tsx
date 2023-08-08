import {useLocation, useNavigate} from "react-router";
import {Status} from "./Status";
import {ApiService, Ticket} from "../api/service";
import {Button} from "react-bootstrap";

const apiService = new ApiService();

export const TicketDetails = () => {
    const {state} = useLocation() as {state: Ticket};
    const navigate = useNavigate();

    return <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <div><h2>Ticket ID: {state.id}</h2></div>
        <div><p>Description: {state.description}</p></div>
        <div><p>Status: <Status completed={state.completed}/></p></div>
        <div>
            <Button onClick={() => navigate(-1)} className="me-2">Back</Button>
            <Button onClick={() => {
                apiService.complete(state.id)
            }}>Complete</Button></div>
    </div>
}
