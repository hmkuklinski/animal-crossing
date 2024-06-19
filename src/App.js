import './App.css';
import Villager from './villager';
import Flowers from './flowers';
import Island from './island';
import Fishes from './Fishes.js';
import Bugs from './Bugs.js';
import Photos from './Photos.js';
import Message from './Message.js';
import React, { useState} from 'react';

function App() {
  const [showOptions, setShowOptions]= useState(false);
  
  const settings = (
    <div className="settings-container" onClick={displayOptions} title="Page Options">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
  );
  //the container with the icons to change the page display:
  const options = (
    <div className="options-container" style={{display: showOptions? 'block': 'none'}}>
        {/* the home icon displays the villagers information*/}
        <div className="home" onClick={showVillagers}>
            <ion-icon name="home-outline"></ion-icon>
            <span className="info">Meet My Villagers</span>
        </div>

        {/* the player icon displays my player information */}
        <div className="player-icon" onClick={showPlayer}>
            <ion-icon name="person-outline"></ion-icon>
            <span className="info">Player Information</span>
        </div>

        {/* the flower icon displays the flower information */}
        <div className="flower-icon" onClick={showFlowers}>
            <ion-icon name="flower-outline"></ion-icon>
            <span className="info">Flower Tracker</span>
        </div>

        {/* the bug icon will display the bugs I've discovered */}
        <div className="bugs-discovered" onClick={showBugs}>
          <ion-icon name="bug-outline"></ion-icon>
          <span className="info">Bugs Discovered</span>
        </div>

        {/* the fish icon will display the fish I've discovered */}
        <div className="fish-discovered" onClick={showFish}>
          <ion-icon name="fish-outline"></ion-icon>
          <span className="info">Fish Caught</span>
        </div>

        {/* the photo icon will display pictures of my island */}
        <div className="island-photos" onClick={showIslandPhotos}>
          <ion-icon name="image-outline"></ion-icon>
          <span className="info">See Island</span>
        </div>

        {/* the chat bubble will allow users to fill out form to add to array? */}
        <div className="message-icon" onClick ={showMessage}>
        <ion-icon name="pencil-outline"></ion-icon>
          <span className="info">Leave a Message</span>
        </div>

        
    </div>
  );


  //setting the current page display (and allowing changes to current page state)
  //want it to display villagers on default
  const [currentPage, setCurrentPage]= useState('villagers');
  
  //these functions allow for change of state depending on icon clicked:
  function showFlowers(){
    setCurrentPage('flowers');
    setShowOptions(false);
  }
  function showVillagers(){
    setCurrentPage('villagers');
    setShowOptions(false);
  }
  function showPlayer(){
    setCurrentPage('player');
    setShowOptions(false);
  }

  function showBugs(){
    setCurrentPage('bugs');
    setShowOptions(false);
  }

  function showFish(){
    setCurrentPage('fish');
    setShowOptions(false);
  }

  function showIslandPhotos(){
    setCurrentPage('photos');
    setShowOptions(false);
  }

  function showMessage(){
    setCurrentPage('message');
    setShowOptions(false);
  }
  //to display/hide the other options with a single icon click
  function displayOptions(){
    showOptions? setShowOptions(false): setShowOptions(true);
  }

  //the return function of the app (aka the main display!!)
  return (
    <div className="App">
      {/* to check the state and display the respective components */}
      {currentPage === 'villagers' && <Villager />}
      {currentPage === 'player' && <Island />}
      {currentPage === 'flowers' && <Flowers />}      
      {currentPage === 'fish' && <Fishes  />}
      {currentPage === 'bugs' && <Bugs />}
      {currentPage === 'photos' && <Photos />}
      {currentPage === 'message' && <Message />}
      {settings}
      {options}
    </div>
  );
}

export default App;
