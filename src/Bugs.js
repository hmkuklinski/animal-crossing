import {React, useState} from "react";
import BugList from "./BugList.js";

export default function Bugs(){
    const bugArray =[
        {
            name: "Common Butterfly",
            imgSrc: "https://dodo.ac/np/images/thumb/9/9f/Common_Butterfly_NH.png/200px-Common_Butterfly_NH.png"
        },
        {
            name: "Yellow Butterfly",
            imgSrc: "https://dodo.ac/np/images/thumb/7/74/Yellow_Butterfly_NH.png/200px-Yellow_Butterfly_NH.png"
        },
        {
            name: "Tiger Butterfly",
            imgSrc: "https://dodo.ac/np/images/thumb/e/e1/Tiger_Butterfly_NH.png/200px-Tiger_Butterfly_NH.png"
        },
        {
            name: "Great Purple Emperor",
            imgSrc: "https://dodo.ac/np/images/thumb/3/3f/Great_Purple_Emperor_NH.png/200px-Great_Purple_Emperor_NH.png"
        },
        {
            name: "Darner Dragonfly",
            imgSrc: "https://dodo.ac/np/images/thumb/5/57/Darner_Dragonfly_NH.png/200px-Darner_Dragonfly_NH.png"
        },
        {
            name: "Grasshopper",
            imgSrc: "https://dodo.ac/np/images/thumb/1/1d/Grasshopper_NH.png/200px-Grasshopper_NH.png"
        },
        {
            name: "Ladybug",
            imgSrc: "https://dodo.ac/np/images/3/33/Ladybug_NH.png"
        },
        {
            name: "Mantis",
            imgSrc: "https://dodo.ac/np/images/thumb/d/da/Mantis_NH.png/200px-Mantis_NH.png"
        },
        {
            name: "Long Locus",
            imgSrc: "https://dodo.ac/np/images/thumb/8/8c/Long_Locust_NH.png/200px-Long_Locust_NH.png"
        },
        {
            name: "Cockroach",
            imgSrc: "https://dodo.ac/np/images/1/11/Cockroach_WW_Sprite.png"
        },
        {
            name: "Wasp",
            imgSrc: "https://dodo.ac/np/images/thumb/b/bb/Wasp_NH.png/200px-Wasp_NH.png"
        },
        {
            name: "Firefly",
            imgSrc: "https://dodo.ac/np/images/5/50/Firefly_NH.png"
        },
        {
            name: "Citrus Long Horned Beetle",
            imgSrc: "https://dodo.ac/np/images/thumb/2/24/Citrus_Long-Horned_Beetle_NH.png/200px-Citrus_Long-Horned_Beetle_NH.png"
        },
        {
            name: "PondSkater",
            imgSrc: "https://dodo.ac/np/images/thumb/e/ea/Pondskater_NH.png/200px-Pondskater_NH.png"
        },
        {
            name: "Pill Bug",
            imgSrc: "https://dodo.ac/np/images/0/02/Pill_Bug_NH.png"
        },
        {
            name: "Ant",
            imgSrc: "https://dodo.ac/np/images/4/4a/Ant_NH.png"
        },
        {
            name: "Mosquito",
            imgSrc: "https://dodo.ac/np/images/1/1c/Mosquito_NH.png"
        },
        {
            name: "Spider",
            imgSrc: "https://dodo.ac/np/images/thumb/e/e5/Spider_NH.png/200px-Spider_NH.png"
        },
        {
            name:"Orchid Mantis",
            imgSrc: "https://dodo.ac/np/images/thumb/c/cd/Orchid_Mantis_NH.png/200px-Orchid_Mantis_NH.png"
        },
        {
            name: "Horned Elephant",
            imgSrc: "https://dodo.ac/np/images/thumb/b/b9/Horned_Elephant_NH.png/200px-Horned_Elephant_NH.png"
        },
        {
            name: "Rajah Brooke's Birdwing",
            imgSrc: "https://dodo.ac/np/images/b/b7/Rajah_Brooke%27s_Birdwing_NH.png"
        },
        {
            name: "Tiger Beetle",
            imgSrc: "https://dodo.ac/np/images/a/a0/Tiger_Beetle_NH.png"
        },
        {
            name: "Paper kite butterfly",
            imgSrc: "https://dodo.ac/np/images/thumb/c/c7/Paper_Kite_Butterfly_NH.png/200px-Paper_Kite_Butterfly_NH.png"
        },
        {
            name: "Man faced Stink Bug",
            imgSrc: "https://dodo.ac/np/images/1/1e/Man-Faced_Stink_Bug_NH.png"
        },
        {
            name: "Common Bluebottle",
            imgSrc: "https://dodo.ac/np/images/thumb/b/b3/Common_Bluebottle_NH.png/200px-Common_Bluebottle_NH.png"
        },
        {
            name: "Horned Dynastid",
            imgSrc: "https://dodo.ac/np/images/thumb/4/4f/Horned_Dynastid_NH.png/200px-Horned_Dynastid_NH.png"
        },
        {
            name: "Giant Stag",
            imgSrc: "https://dodo.ac/np/images/thumb/6/6b/Giant_Stag_NH.png/200px-Giant_Stag_NH.png"
        },
        {
            name: "Bagworm",
            imgSrc: "https://dodo.ac/np/images/0/08/Bagworm_NH.png"
        },
        {
            name: "Stinkbug",
            imgSrc: "https://dodo.ac/np/images/thumb/5/5b/Stinkbug_NH.png/200px-Stinkbug_NH.png"
        },
        {
            name: "Dung Beetle",
            imgSrc: "https://dodo.ac/np/images/thumb/f/f8/Dung_Beetle_NH.png/200px-Dung_Beetle_NH.png"
        },
        {
            name: "Monach Butterfly",
            imgSrc: "https://dodo.ac/np/images/thumb/e/ec/Monarch_Butterfly_NH.png/200px-Monarch_Butterfly_NH.png"
        },
        {
            name: "Moth",
            imgSrc: "https://dodo.ac/np/images/thumb/a/ab/Moth_NH.png/200px-Moth_NH.png"
        },
        {
            name: "Latern Fly",
            imgSrc: "https://dodo.ac/np/images/thumb/2/2a/Lantern_Fly_NL_Model.png/200px-Lantern_Fly_NL_Model.png"
        },
        {
            name: "Walking Stick",
            imgSrc: "https://dodo.ac/np/images/thumb/0/0f/Walking_Stick_NH.png/200px-Walking_Stick_NH.png"
        },
        {
            name: "Tarantula",
            imgSrc: "https://dodo.ac/np/images/thumb/b/bf/Tarantula_NH.png/200px-Tarantula_NH.png"
        },
    ];

    const [bugData, setBugData]= useState(bugArray);

    return(
        <div>
            <div className="title"><h1>Bugs</h1></div>
            <BugList  bugInfo={bugData} />
        </div>
        
    )
}

