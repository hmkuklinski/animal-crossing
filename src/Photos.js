import React, {useState, useEffect} from "react";

export default function Photos(){
    // Pictures to display for Island!
  const islandPages = [
    <img src="island-well.jpg" alt="well"></img>,
    <img src="island-farming.jpg" alt="farming"></img>,
    <img src="island-construction.jpg" alt="construction"></img>,
    <img src="island-flowers.jpg" alt="flowers"></img>,
    <img src="island-flowers2.jpg" alt="flowers 2"></img>,
    <img src="island-pumpkin-patch.jpg" alt="pumpkins"></img>,
    <img src="island-shop.jpg" alt="shop"></img>,
    <img src="island-shop2.jpg" alt="shop 2"></img>
  ];

  // Pictures to display for Friends
  const friendPages = [
    <img src="friend-fauna.jpg" alt="fauna 1"></img>,
    <img src="friend-sarah3.jpg" alt="sarah 1"></img>,
    <img src="friend-fauna2.jpg" alt="fauna 2"></img>,
    <img src="friend-sarah2.jpg" alt="sarah 2"></img>,
    <img src="friend-sarah.jpg" alt="sarah 3"></img>
  ];

    //state for current picture page
    const [picturePage, setPicturePage] = useState(0);
    const [friend, setFriend] = useState(false);

    //what array do we pull from? check to see if on page friends
    //if friend is true, display friend pictures, else show island photos
    const pages = friend ? friendPages : islandPages;
    
    //toggle for the page type
    function changeType(){
        //get previous Friend values --> change it to other version
        setFriend((prevFriend) => !prevFriend);
        setPicturePage(0); //start at the beginning of the display on page 1 (index 0)
    }


    //useEffect to change the number of photos displayed based on screen
    const [width, setWidth]= useState(window.innerWidth);
    const [imagesPerPage, setImagesPerPage] = useState(3);

    //use effect for the window addEventListener/clean up:
    function handleResize(){
        setWidth(window.innerWidth); //update the window size based on new value
    }

    useEffect(()=>{ 
        window.addEventListener("resize", handleResize);
        handleResize();

        //clean up eventListener
        return () => {
            window.removeEventListener("resize", handleResize);
          };
    }, []);

    //when width changes, will check/change the number of images per page if needed
    useEffect(()=> {
        if (width < 850) {
            setImagesPerPage(1);
        } 
        else if (width< 1275) {
            setImagesPerPage(2);
        } 
        else {
            setImagesPerPage(3);
        }
    }, [width]);

    //get the starting point in the array: take current page and multiply it by images per page
    const startIndex = picturePage * imagesPerPage;
    //get last one by adding to the start index --> images per page
    const endIndex = startIndex + imagesPerPage;

    //want to start at startIndex and end at endIndex
    //will allow us to show 1-3, 4-6, etc... (for 3), 1-2, 3-4, 5-6, etc... (for 2), and only 1 when 1 specified
    const displayedImages = pages.slice(startIndex, endIndex);

    //get the total number of pages- round up the length of array/images per page:
    const totalPages = Math.ceil(pages.length/imagesPerPage);

    //function to generate proper number of dots:
    function generateNavDots(){
        const dots = [];
        for (let index = 0; index < totalPages; index++) {
            dots.push(
                <div
                    key={index}
                    className={`page-selection ${index === picturePage ? 'active' : ''}`}
                    onClick={() => setPicturePage(index)}
                    style={{ cursor: 'pointer', padding: '5px' }}
                >
                    <ion-icon name={index === picturePage ? "ellipse" : "ellipse-outline"}></ion-icon>
                </div>
            );
        }
        return dots;
    };

    return (
        <div className="photo-container">
            <div className="title"><h1>Island Screenshots</h1></div>
            <div className="change-display-type">
                <button className="btn-type" onClick={changeType}>Change to {friend? "Island Photos": "Friends"}</button>
            </div>
            <div className="images">
            {displayedImages.map((image, index) => (
                    <div className="image-container" key={index}>
                        {image}
                    </div>
                ))}
            </div>
            <div className="image-navigation">
                {generateNavDots()}
            </div>
        </div>
    );
}