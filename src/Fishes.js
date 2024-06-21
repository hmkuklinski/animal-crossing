import Fish from './Fish.js';
import React, {useState, useEffect} from "react";

export default function Fishes(){
    const fishArray=[
        {
          name: "Shrimp",
          description: "You're trying to tell me that a shrimp fried this rice?",
          imageUrl: "https://dodo.ac/np/images/8/80/Sweet_Shrimp_NH.png"
        },
        {
          name: "Sea Bass",
          description: "This fish's favorite programming language is C'",
          imageUrl: "https://dodo.ac/np/images/d/d6/Sea_Bass_NH.png"
        },
        {
          name: "Crucian Carp",
          description: "This fish was just crucian down the river",
          imageUrl: "https://dodo.ac/np/images/5/5c/Crucian_Carp_NH.png"
        },
        {
          name: "Black Bass",
          description: "The most metal of fishes",
          imageUrl: "https://dodo.ac/np/images/4/4b/Black_Bass_NH.png"
        },
        {
          name: "Zebra Turkey Fish",
          description: "Is it a Zebra? Is it a turkey?",
          imageUrl: "https://www.thenookmall.com/cdn/shop/products/FishMinokasagoCropped_2ebaafc3-d1ca-42ad-8dcd-4b8c3c538ddd_436x.png?v=1705332724"
        },
        {
          name: "Goldfish",
          description: "I bet it is at least 4 karats",
          imageUrl: "https://dodo.ac/np/images/e/e7/Goldfish_NH.png"
        },
        {
          name: "Carp",
          description: "I caught a carp! Ouch! I hurt my wrist! It might be CARPal-tunnel!",
          imageUrl: "https://dodo.ac/np/images/thumb/3/39/Carp_NH.png/200px-Carp_NH.png"
        },
        {
          name: "Koi",
          description: "I caught a koi! Whoever colored it did a really good job!",
          imageUrl: "https://dodo.ac/np/images/thumb/2/24/Koi_NH.png/200px-Koi_NH.png"
        },
        {
          name: "Bitterling",
          description: "I caught a bitterling! I wonder what makes the little guy so angry...",
          imageUrl: "https://dodo.ac/np/images/thumb/8/86/Bitterling_NH.png/200px-Bitterling_NH.png"
        },
        {
          name: "Loach",
          description: "I caught a loach! It wasn't hard to approach!",
          imageUrl: "https://dodo.ac/np/images/thumb/4/4f/Loach_NH.png/200px-Loach_NH.png"
        },
        {
          name: "Eel",
          description: "I caught an eel! I've been told they're rEELy tough to catch! (I'm sorry...)",
          imageUrl: "https://dodo.ac/np/images/thumb/9/93/Eel_NL_Model.png/200px-Eel_NL_Model.png"
        },
        {
          name: "Pond Smelt",
          description: "I caught a pond smelt! Whew! And I thought the POND smelt bad!",
          imageUrl: "https://dodo.ac/np/images/thumb/f/fc/Pond_Smelt_NH.png/200px-Pond_Smelt_NH.png"
        },
        {
          name: "Rainbow Trout",
          description: "I caught a rainbow trout! Now that's a trout of a different color!",
          imageUrl: "https://dodo.ac/np/images/thumb/2/2a/Rainbow_Trout_NL_Model.png/200px-Rainbow_Trout_NL_Model.png"
        },
        {
          name: "Crawfish",
          description: "I caught a crawfish! Watch those pinchers!",
          imageUrl: "https://dodo.ac/np/images/thumb/b/b6/Crawfish_NH.png/117px-Crawfish_NH.png"
        },
        {
          name: "Red Snapper",
          description: "I caught a red snapper! Ooh, SNAP!",
          imageUrl: "https://dodo.ac/np/images/thumb/1/13/Red_Snapper_NH.png/200px-Red_Snapper_NH.png"
        },
        {
          name: "Dab",
          description: "I caught a dab! And I'm feeling fab!",
          imageUrl: "https://dodo.ac/np/images/thumb/e/e0/Dab_NH.png/200px-Dab_NH.png"
        },
        {
          name: "Horse Mackerel",
          description: "I caught a horse mackerel! Holy mackerel!",
          imageUrl: "https://dodo.ac/np/images/thumb/7/77/Horse_Mackerel_NH.png/200px-Horse_Mackerel_NH.png"
        },
        {
          name: "Freshwater Goby",
          description: "I caught a freshwater goby! Goby? Go, me!",
          imageUrl: "https://dodo.ac/np/images/thumb/5/5a/Freshwater_Goby_NH.png/200px-Freshwater_Goby_NH.png"
        },
        {
          name: "Killifish",
          description: "I caught a killifish! Maybe I'll put it in a chili dish!",
          imageUrl: "https://dodo.ac/np/images/c/c2/Killifish_NH.png"
        },
        {
          name: "Squid",
          description: "I caught a squid! Oh no I squidn't!",
          imageUrl: "https://dodo.ac/np/images/thumb/3/3b/Squid_NH.png/88px-Squid_NH.png"
        },
        {
          name: "Sea Horse",
          description: "I caught a seahorse! Giddy up! YEE HAW!",
          imageUrl: "https://dodo.ac/np/images/thumb/7/7f/Sea_Horse_NH.png/106px-Sea_Horse_NH.png"
        },
        {
          name: "Blue Marlin",
          description: "I caught a blue marlin! Hey there, little darlin'!",
          imageUrl: "https://dodo.ac/np/images/thumb/0/0e/Blue_Marlin_NH.png/200px-Blue_Marlin_NH.png"
        },
        {
          name: "Sea Butterfly",
          description: "I caught a sea butterfly! I wonder if it used to be a sea caterpillar?",
          imageUrl: "https://dodo.ac/np/images/f/f9/Sea_Butterfly_NH.png"
        },
        {
          name: "Football Fish",
          description: "I caught a football fish! Thanks to my fishing tackle!",
          imageUrl: "https://dodo.ac/np/images/thumb/e/ef/Football_Fish_NH.png/200px-Football_Fish_NH.png"
        },
        {
          name: "Tuna",
          description: "I caught a tuna! I only wish I'd caught it soona!",
          imageUrl: "https://dodo.ac/np/images/thumb/6/60/Tuna_NH.png/200px-Tuna_NH.png"
        },
        {
          name: "Lobster",
          description: "I got a lobster! Lobjective complete",
          imageUrl: "https://dodo.ac/np/images/thumb/b/b6/Lobster_NH.png/150px-Lobster_NH.png"
        }
        
      ];
      //takes in the fishList info from fishs.js and creates a fish component for each fish in list!
    // State for current fish group page
    const [fishPage, setFishPage] = useState(0);

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
            setImagesPerPage(12); //will prevent the navdot overflow into menu option
        }
        else if (width<1120){
            setImagesPerPage(6);
        }
        else {
            setImagesPerPage(8);
        }
    }, [width]);

    //for paging display
    const startIndex = fishPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const displayedImages = fishArray.slice(startIndex, endIndex);

    //get the total number of pages- round up the length of array/images per page:
    const totalPages = Math.ceil(fishArray.length/imagesPerPage);

    //function to generate proper number of dots:
    function generateNavDots(){
        const dots = [];
        for (let index = 0; index < totalPages; index++) {
            //add active class to existing className if index matches current fishPage value
            //if current fishPage, have fish filled in with whitesmoke, else will be outline in green color
            dots.push(
                <div
                    key={index}
                    className={`page-selection ${index === fishPage ? 'active' : ''}`}
                    onClick={() => setFishPage(index)}
                    style={{ cursor: 'pointer', padding: '5px' }}
                >
                    <ion-icon name={index === fishPage ? "fish" : "fish-outline"} style={{color: index === fishPage ? "whitesmoke": "#a4dda2"}}></ion-icon>
                </div>
            );
        }
        return dots;
    }
    
    //return function will pass in fishArray and create a Fish component for each fish entry
    return(
        <div className="fishes-container">
            <div className="title"><h1>Fishes Discovered: </h1></div>
            <div className="fish-list">
                {displayedImages.map(function(fish, index){
                    return <Fish key={index} name={fish.name} imageUrl={fish.imageUrl} description={fish.description} />
                })}
            </div>
            <div className="image-navigation" id="fish-nav">
                {generateNavDots()}
            </div>
        </div>
    );
}
