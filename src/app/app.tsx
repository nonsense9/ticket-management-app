import React, { useEffect, useState } from "react";
import "./app.css";
import { ApiService, Ticket } from "../api";

interface AppProps {
  apiService: ApiService;
}

const App = ({ apiService }: AppProps) => {
  const [tickets, setTickets] = useState([] as Ticket[]);

  // The apiService returns observables, but you can convert to promises if
  // that is easier to work with. It's up to you.
  useEffect(() => {
    const fetchData = async () => {
      const result = await apiService.tickets().toPromise();
      setTickets(result);
    };
    fetchData();

    // Example of use observables directly
    // const sub = apiService.tickets().subscribe(result => {
    //   setTickets(result);
    // });
    // return () => sub.unsubscribe(); // clean up subscription
  }, [apiService]);

  return (
    <div className="app">
      <h2>Tickets</h2>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map(t => (
            <li key={t.id}>
              Ticket: {t.id}, {t.description}
            </li>
          ))}
        </ul>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
};

export default App;
