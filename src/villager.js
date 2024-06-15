import React, { useState, useEffect } from 'react';
export default function Villager(){

    //img information for the villagers:
    const cobbImg= <img src="cobbf.png" alt="Cobb"></img>;
    const faunaImg= <img src="fauna.png" alt="Fauna"></img>;
    const zuckerImg= <img src="zucker.png" alt="Zucker"></img>;
    const juliaImg = <img src="julia.png" alt = "Julia"></img>;
    const coachImg= <img src="coach.gif" alt="Coach"></img>;
    const divaImg = <img src="https://dodo.ac/np/images/4/44/Diva_NH.png" alt="diva"></img>;

    //array of the all villagers, with each entry holding respective villager information:5
    const villagers = [
        {   name: "Cobb",
            color: "Green",
            colorCode: "#a4dda2",
            type: "Pig",
            image: cobbImg,
            description: "Cobb is a healthy pig that loves going to the gym! He will often call you 'Hot Dog'."
        }, 
        {
            name: "Fauna",
            color: "Brown",
            colorCode: "#d0ac76",
            type: "Deer",
            image: faunaImg,
            description: "Fauna is an avid planter and baker. She loves calling her friends 'deary'."
        },
        {
            name: "Julia",
            color: "Blue",
            colorCode: "#badcee",
            type: "Peacock",
            image: juliaImg,
            description: "julia loves strutting her stuff and collecting all kinds of beautiful butterflies"
        },
        {
            name: "Zucker",
            color: "Peach",
            colorCode: "#FEBF96",
            type: "Octopus",
            image: zuckerImg,
            description: "zucker is an introverted octopus who loves reading and eating peaches"
        },
        {
            name: "Coach",
            color: "Yellow",
            colorCode: "#FEED96",
            image: coachImg,
            description: "Coach is a fitness trainer who loves encouraging others to exercise and stretch."
        },
        {
            name: "Diva",
            color: "Purple",
            colorCode: "#BFB1F0",
            type: "Frog",
            image: divaImg,
            description: "Super sassy and constantly gets in the way when I'm trying to pick my fruits."
        }
    ];

    //for the buttons to change villager profile:
    const arrayLength = villagers.length;
    const [index, setIndex]= useState(0);

    //want it to wrap around if they reach either end of array (prevents indexOutOfBounds)
    function decreaseIndex(){
        if (index ===0){ //at beginning of array, want to go to end of array
            setIndex(arrayLength-1);
        }
        else{ //are not at the leftmost end, can decrease as normal
            setIndex(index-1);
        }
    }

    function increaseIndex(){
        if (index===arrayLength-1){ //at rightmost end of array, need to wrap
            setIndex(0);
        }
        else{ //no wrap required
            setIndex(index+1);
        }
    }

    //to decide whether to use displayAll or individual scroll option:
    const [scrollDisplay, setScrollDisplay] = useState(false);

    //function to see how wide the window is:
    const checkWindow= function(){
        setScrollDisplay(window.innerWidth > 850);
    }

    //how to change the display:
    useEffect(() => {
        checkWindow(); // call checkWindow function (what is size of window? --> set to scroll or displayall)
        window.addEventListener('resize', checkWindow); // add event listener so we can constantly check if window size changed

        // cleanup the event listener to avoid memory leaks
        return () => {
            window.removeEventListener('resize', checkWindow);
        };
    }, []);


    //to see if there is a hover:
    const [showDescription, setShowDescription]=useState(false);

    //the user is hovering!
    const handleMouseEnter=() =>{
        setShowDescription(true);
    }
    //the user is no longer hovering.
    const handleMouseLeave=() =>{
        setShowDescription(false);
    }
    
    //to display all of the villagers:
    const displayAll = (<div className="villager-box">
            {villagers.map((villager) => (
                <div className= "villager-container" key={villager.name} style={{backgroundColor: villager.colorCode}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="villager-icon">
                        {villager.image}
                    </div>
                    <div className="villager-info" style={{display: 'block'}}>
                        <h2>{villager.name}</h2>
                        <h3>Type: {villager.type}</h3>
                        <h3>Color: {villager.color}</h3>
                        <p>{villager.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    //to use scroll display:
    const villagerScroll = (
        <div className="villager-scroll"> {/* holds the scroll buttons and villagers info */}
            <div className="btn-container">
                <button className="btn-decrease" onClick={decreaseIndex}><ion-icon name="arrow-back-outline"></ion-icon></button>
            </div>
            <div className= "villager-container" key={villagers[index].name} style={{backgroundColor: villagers[index].colorCode}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="villager-icon">
                    {villagers[index].image}
                </div>
                <div className="villager-name">
                    <h2>{villagers[index].name}</h2>
                    <h3>Type: {villagers[index].type}</h3>
                    <h3>Color: {villagers[index].color}</h3>
                    <p className="villager-info" style={{display: showDescription? 'block': 'none'}}> {/* show description on hover */}
                        {villagers[index].description}
                    </p>
                </div>     
            </div>
            
            <div className="btn-container">
                <button className="btn-increase" onClick={increaseIndex}><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
        </div>
    );

    const villagerTitle= <div className="title"><h1>My Villagers:</h1></div>;
    const hoverInfo = <div className="hover-info"><h3>Hover to learn more!</h3></div>;

    //which version do we display?:
    if (scrollDisplay){
        return(
            <div className="container">
                {villagerTitle}
                {hoverInfo}
                {villagerScroll}
            </div>
        );
    }
    else{
        return(
            <div className="container">
                {villagerTitle}
                {displayAll}
             </div> 
        );
    }
    
}