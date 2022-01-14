import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const sendData = useCallback(async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ timeIs: new Date() }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log('Fetch')
    await fetch("http://localhost:8000/endpoint", options);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to go fast.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendData}>Send data</button>
      </header>
    </div>
  );
}

export default App;
