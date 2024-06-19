import './App.css';
import Villager from './villager';
import Flowers from './flowers';
import Island from './island';
import Fishes from './Fishes.js';
import Bugs from './Bugs.js';
import Photos from './Photos.js';
import Message from './Message.js';
import React, { useState, useEffect} from 'react';

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


  //use for changing background on page selection from icons
  const defaultBackground = "https://userstyles.org/style_screenshots/262815_after.png?r=1712304012";
  const flowerBackground = "https://wallpaperswide.com/download/sprout_vector_art-wallpaper-1152x768.jpg";
  const bugBackground = "https://w0.peakpx.com/wallpaper/755/954/HD-wallpaper-animal-crossing-acnh-animal-crossing.jpg";
  const fishBackground = "https://www.shutterstock.com/image-vector/illustration-frame-koi-swimming-pond-600nw-2331554297.jpg";
  let photoBackground = "https://th.bing.com/th/id/R.1f07679224da224ac0839c645742bfbb?rik=YXdt3NclX%2fgmAg&riu=http%3a%2f%2fclipground.com%2fimages%2fbulletin-board-clipart-6.jpg&ehk=LIM7dEt1wdpjtgCeD3aq9s0Rzj2txtCRBPIc27zDgro%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1";
  const [backgroundImage, setBackgroundImage]= useState(defaultBackground);
  const [backgroundSize, setBackgroundSize] = useState('cover');

  const [width, setWidth]= useState(window.innerWidth);
  

  function handleResize(){
    setWidth(window.innerWidth);
  }
  //for changing photo background if on smaller screen!
  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return(
      ()=>{
        window.removeEventListener("resize", handleResize);
      }
    )
  });

  //if width or current page changes, check the width and set background image accordingly
  useEffect(() => {
    if (width <= 915) {
      setBackgroundImage(defaultBackground);
    } else {
      if (currentPage === 'photos') {
        setBackgroundImage(photoBackground);
        setBackgroundSize('contain');
      }
      else {
        setBackgroundSize('cover');
      }
    }
  }, [width, currentPage, photoBackground]);
  //const backgroundImage = currentPage === 'flowers' ? flowerBackground : defaultBackground;

  //these functions allow for change of state depending on icon clicked:
  function showFlowers(){
    setCurrentPage('flowers');
    setShowOptions(false);
    setBackgroundImage(flowerBackground);
  }
  function showVillagers(){
    setCurrentPage('villagers');
    setShowOptions(false);
    setBackgroundImage(defaultBackground);
  }
  function showPlayer(){
    setCurrentPage('player');
    setShowOptions(false);
    setBackgroundImage(defaultBackground);
  }

  function showBugs(){
    setCurrentPage('bugs');
    setShowOptions(false);
    setBackgroundImage(bugBackground);
  }

  function showFish(){
    setCurrentPage('fish');
    setShowOptions(false);
    setBackgroundImage(fishBackground);
  }

  function showIslandPhotos(){
    setCurrentPage('photos');
    setShowOptions(false);
    setBackgroundImage(photoBackground);
  }

  function showMessage(){
    setCurrentPage('message');
    setShowOptions(false);
    setBackgroundImage(defaultBackground);
  }
  //to display/hide the other options with a single icon click
  function displayOptions(){
    showOptions? setShowOptions(false): setShowOptions(true);
  }

  //the return function of the app (aka the main display!!)
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
