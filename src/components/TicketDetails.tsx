import {useNavigate, useParams} from "react-router";
import {Status} from "./Status";
import {ApiService, Ticket} from "../api";
import {useEffect, useState} from "react";
const apiService = new ApiService();

export const TicketDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [ticket, setTicket] = useState({} as Ticket)

    useEffect(() => {
        apiService.ticket(Number(params.id)).subscribe((res) => setTicket(res))
    }, [params?.id])
    return <div>
        <div><button onClick={() => navigate(-1)}>Back</button></div>
        <div><h2>Ticket ID: {ticket.id}</h2></div>
        <div><p>Description: {ticket.description}</p></div>
        <div><p>Status: <Status completed={ticket.completed}/></p></div>
        <div><button onClick={() => {
            apiService.complete(ticket.id)
            apiService.ticket(Number(params.id)).subscribe((res) => setTicket(res))
        }}>Complete</button></div>
    </div>
}
