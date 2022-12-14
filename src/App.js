import "./App.css";
import { useState, useEffect } from "react";

// Importam noile componente create
import ScrollInfo from "./components/ScrollInfo";
import UserList from "./components/UserList";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiUsers, setApiUsers] = useState([]);

  // Array de obiecte, reprezentand niste useri mai complecsi.
  const players = [
    {
      name: "Ronaldo",
      email: "ronaldo@gmail.com",
      marketValueTrend: "up",
    },
    {
      name: "Neymar jr.",
      email: "neymar.jr@gmail.com",
      marketValueTrend: "up",
      isNew: true,
    },
    {
      name: "Lionel Messi",
      email: "lionel.messi@gmail.com",
      marketValueTrend: "same",
    },
  ];

  // Daca nu dam cel de-al doilea parametru lui useEffect, va fi rulat de fiecare data cand componenta este rerandata.
  // De regula nu dorim sa facem asta, putem crea erori complexe.
  useEffect(() => {
    console.log("Componenta App este randata!");
  });

  // Daca vrem sa rulam efecte doar atunci cand o bucata de state/un prop se schimba, punem acel state/prop in array-ul de dependente.
  useEffect(() => {
    console.log("IsLoggedIn sa schimbat");
  }, [isLoggedIn]);

  // In cazul requesturilor catre server, dorim sa le facem o singura data, cand componenta este afisata pe ecran.
  // Pentru acest caz, dam ca cel de-al doilea parametru al lui useEffect un array gol.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Odata ce ne vin datele de la server, actualizam state-ul.
        setApiUsers(data);
      });
  }, []);

  // comentariu extern
  return (
    <div className="App">
      {/* Instantiem componentele ce afiseaza liste. */}
      <UserList users={players} />
      {/* Folosim operatorul ternar pentru a avea conditii de tip if-else in HTML. */}
      {isLoggedIn ? (
        <ScrollInfo />
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log In</button>
      )}
      {/* Userii de la api vin asincron, initial apiUsers este un array gol. */}
      <UserList users={apiUsers} />
    </div>
  );
}

export default App;
