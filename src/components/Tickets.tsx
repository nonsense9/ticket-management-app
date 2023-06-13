import React, {useEffect, useState} from "react";
import {ApiService, Ticket} from "../api";
import {useNavigate} from "react-router";

const apiService = new ApiService();

export const Tickets = () => {
    const [tickets, setTickets] = useState([] as Ticket[]);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    let r = (Math.random() + 1).toString(36).substring(7);
    // The apiService returns observables, but you can convert to promises if
    // that is easier to work with. It's up to you.
    const updateState = () => {
        const sub = apiService.tickets().subscribe(result => {
            setTickets(result);
        });
        return () => sub.unsubscribe(); // clean up subscription
    }
    const addNewTicket = () => {
        if (!description) return;
        apiService.newTicket({description})
        updateState();
    }
    useEffect(() => {
        updateState();
    }, [apiService]);

    return <div>
        <div>
            <h2>Tickets</h2>
            {tickets.length > 0 ? (
                <ul>
                    {tickets.map(t => (
                        <li key={t.id} onClick={() => navigate(`/${t.id}`, {state: t})}>
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
    </div>
}
