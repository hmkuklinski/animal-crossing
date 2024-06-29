import React, { useState } from 'react';
//for linking the routes (the different components/ "pages")
import { Routes, Route, Link } from 'react-router-dom';
import Villager from './villager';
import Flowers from './flowers';
import Island from './island';
import Fishes from './Fishes.js';
import Bugs from './Bugs.js';
import Photos from './Photos.js';
import Message from './Message.js';
import './App.css';

function App() {
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle the display of options
  function displayOptions() {
    setShowOptions(prevShowOptions => !prevShowOptions);
  }

  // The settings container with the icon to toggle options display
  const settings = (
    <div className="settings-container" onClick={displayOptions} title="Page Options">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
  );
  /* ----- notes about routing:
  --> prevents full reloading of window with click
  --> use the Routes to hold the individual Route
  --> individual Route includes the path and the element we want to display when clicked
      <Routes>
          <Route path="/path" element= {<Component />} />
      </Routes>
      (put this in the return!)
  --> To allow path to work, need to insert a <Link to="/path">Content </Link> 
      (will add this inside the respective div --> if they click in the div, will route to the /path)
  ---------------------------------*/

  //routing eliminates need to call function to change currentPage state (and compare value in return to display proper component)
  //will display based on path instead!

  // The container with the icons to change the page display
  const options = (
    <div className="options-container" style={{ display: showOptions ? 'block' : 'none' }}>
      <div className="home">
        <Link to="/">
          <ion-icon name="home-outline"></ion-icon>
          <span className="info">Meet My Villagers</span>
        </Link>
      </div>
      <div className="player-icon">
        <Link to="/player">
          <ion-icon name="person-outline"></ion-icon>
          <span className="info">Player Information</span>
        </Link>
      </div>
      <div className="flower-icon">
        <Link to="/flowers">
          <ion-icon name="flower-outline"></ion-icon>
          <span className="info">Flower Tracker</span>
        </Link>
      </div>
      <div className="bugs-discovered">
        <Link to="/bugs">
          <ion-icon name="bug-outline"></ion-icon>
          <span className="info">Bugs Discovered</span>
        </Link>
      </div>
      <div className="fish-discovered">
        <Link to="/fish">
          <ion-icon name="fish-outline"></ion-icon>
          <span className="info">Fish Caught</span>
        </Link>
      </div>
      <div className="island-photos">
        <Link to="/photos">
          <ion-icon name="image-outline"></ion-icon>
          <span className="info">See Island</span>
        </Link>
      </div>
      <div className="message-icon">
        <Link to="/message">
          <ion-icon name="pencil-outline"></ion-icon>
          <span className="info">Leave a Message</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="App">
      {/* The Routes component to define the route paths
          ---> if Route path is "/path", then display element
      */}
      <Routes>
        <Route path="/" element={<Villager />} />
        <Route path="/player" element={<Island />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/fish" element={<Fishes />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      {settings}
      {options}
    </div>
  );
}

export default App;
