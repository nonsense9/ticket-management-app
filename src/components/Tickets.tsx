import React, {useEffect, useState} from "react";
import {ApiService, Ticket} from "../api";
import {useNavigate} from "react-router";

const apiService = new ApiService();

export const Tickets = () => {
    const [tickets, setTickets] = useState([] as Ticket[]);
    const [description, setDescription] = useState('');
    const [dictionary, setDictionary] = useState([{}] as any);
    const [word, setWord] = useState('' as string);
    const navigate = useNavigate();
    const getAudio = () => {
        const audio = dictionary.map((i: {phonetics: any;}) => i.phonetics[0])
        let a = new Audio(audio[0].audio)
        a.play();
    }
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

    const getDictionary = () => {
        return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
            method: 'GET',
        }).then((res) => res.json()).then(res => setDictionary(res))
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
        <div>
            <button onClick={getDictionary}>Get Audio</button>
            <label htmlFor='word'>Introduce word to play</label>
            <input name='word' onChange={(event) => setWord(event.target.value)}/>
            <button onClick={getAudio}>Play Audio</button>
        </div>
    </div>
}
