import Bug from "./Bug.js";
import React, {useState,useEffect} from "react";

export default function BugList(props){
    //takes in the bugList info from Bugs.js and creates a Bug component for each bug in list!
    // State for current bug group page
    const [bugPage, setBugPage] = useState(0);

    //useEffect to change the number of photos displayed based on screen
    const [width, setWidth]= useState(window.innerWidth);
    const [imagesPerPage, setImagesPerPage] = useState(8);

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
        if (width<462){
            setImagesPerPage(10); //will prevent the navdot overflow into menu option
        }
        else if (width < 680) {
            setImagesPerPage(4);
        } 
        else if (width< 900) {
            setImagesPerPage(6);
        } 
        else if (width<1120){
            setImagesPerPage(8);
        }
        else {
            setImagesPerPage(10);
        }
    }, [width]);

    //for paging display
    const startIndex = bugPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const bugList = props.bugInfo;
    const displayedImages = bugList.slice(startIndex, endIndex);

    //get the total number of pages- round up the length of array/images per page:
    const totalPages = Math.ceil(bugList.length/imagesPerPage);

    //function to generate proper number of dots:
    function generateNavDots(){
        const dots = [];
        for (let index = 0; index < totalPages; index++) {
            //add active class to existing className if index matches current bugPage value
            //if current bugPage, have bug filled in with whitesmoke, else will be outline in green color
            dots.push(
                <div
                    key={index}
                    className={`page-selection ${index === bugPage ? 'active' : ''}`}
                    onClick={() => setBugPage(index)}
                    style={{ cursor: 'pointer', padding: '5px' }}
                >
                    <ion-icon name={index === bugPage ? "bug" : "bug-outline"} style={{color: index === bugPage ? "whitesmoke": "#a4dda2"}}></ion-icon>
                </div>
            );
        }
        return dots; //will return the number of dots needed based on pages
    };

    
    return(
        <div>
            <div className="all-bug-container">
                <div className="bug-list">
                    {displayedImages.map(function(bug) {
                    return <Bug name={bug.name} imgSrc={bug.imgSrc} />
                    })}
                </div>
            </div>
            <div className="image-navigation" id="bug-nav">
                {generateNavDots()}
            </div>
        </div>
    );
}