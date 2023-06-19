import React, {useEffect, useState} from "react";
import {Ticket} from "../api/service";
import {Outlet, useNavigate} from "react-router";


export const Tickets = ({apiService}: any) => {
    const [tickets, setTickets] = useState([] as Ticket[]);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const updateState = () => {
        const sub = apiService.tickets().subscribe((result: Ticket[]) => {
            setTickets(result);
        });
        return () => sub.unsubscribe(); // clean up subscription
    }
    const addNewTicket = () => {
        if (!description) return;
        apiService.newTicket({description}).subscribe()
        updateState();
    }

    useEffect(() => {
        updateState();
    }, []);

    return <div>
        <div>
            <h2>Tickets</h2>
            {tickets.length > 0 ? (
                <ul>
                    {tickets.map(t => (
                        <li key={t.id} onClick={() => navigate(`/tickets/${t.id}`, {state: t})}>
                            Ticket: {t.id}, {t.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <span>loading...</span>
            )}</div>
        <div>
            <button onClick={addNewTicket}>Add new ticket</button>
            <label htmlFor='description'>Introduce description</label>
            <input name='description' onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <div><Outlet/></div>
    </div>
}
