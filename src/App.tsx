import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>Fix: 1</li>
          <li>Fix: 2</li>
          <li>Fix: 3</li>
          <li>Feat: 1</li>
          <li>Feat: 2</li>
          <li>Feat: 3</li>
          <li>Feat: 4</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
