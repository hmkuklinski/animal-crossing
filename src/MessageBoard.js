import React from "react";

export default function MessageBoard({ messages, button }){
    const characters = [
        "https://dodo.ac/np/images/thumb/0/0b/Blathers_NH_Character_Icon.png/120px-Blathers_NH_Character_Icon.png",
        "https://dodo.ac/np/images/thumb/4/4c/Celeste_NH_Character_Icon.png/120px-Celeste_NH_Character_Icon.png",
        "https://dodo.ac/np/images/thumb/1/1c/Ankha_NH_Villager_Icon.png/120px-Ankha_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/f/f4/Bob_NH_Villager_Icon.png/120px-Bob_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/9/96/Cheri_NH_Villager_Icon.png/120px-Cheri_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/0/0e/Bill_NH_Villager_Icon.png/120px-Bill_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/a/a5/Bettina_NH_Villager_Icon.png/120px-Bettina_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/6/6e/Candi_NH_Villager_Icon.png/120px-Candi_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/b/ba/Anabelle_NH_Villager_Icon.png/120px-Anabelle_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/4/41/Bones_NH_Villager_Icon.png/120px-Bones_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/5/56/Boots_NH_Villager_Icon.png/120px-Boots_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/c/ce/Cobb_NH_Villager_Icon.png/120px-Cobb_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/d/d9/Cookie_NH_Villager_Icon.png/120px-Cookie_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/7/76/Coach_NH_Villager_Icon.png/120px-Coach_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/7/77/Dizzy_NH_Villager_Icon.png/120px-Dizzy_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/2/29/Fauna_NH_Villager_Icon.png/120px-Fauna_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/f/f9/Gala_NH_Villager_Icon.png/120px-Gala_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/8/82/Hopper_NH_Villager_Icon.png/120px-Hopper_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/f/f4/Julia_NH_Villager_Icon.png/120px-Julia_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/9/99/Marshal_NH_Villager_Icon.png/120px-Marshal_NH_Villager_Icon.png",
        "https://dodo.ac/np/images/thumb/3/36/Nookling_NH_Character_Icon.png/120px-Nookling_NH_Character_Icon.png"
    ];
    function generateBackgroundColor(){
        const hexcodeLetters = "0123456789ABCDEF";
        let color = "#";
        for(let i=0;i<6; i++){
            color += hexcodeLetters[Math.floor(Math.random()* hexcodeLetters.length )]
        }
        return color;
    }

    function getCharacter() {
        return characters[Math.floor(Math.random() * characters.length)];
    }
    const fauna=(
        <div className="message">
            <div className="user-info">
                <div className="message-image"><img src="https://dodo.ac/np/images/2/29/Fauna_NH_Villager_Icon.png" alt="message-icon" style={{backgroundColor: generateBackgroundColor()}}></img></div>
                <div className="message-user">Fauna</div>
            </div>
            <div className="message-text">Hi Dearie!</div>
        </div>
    );

    if (messages.length ===0){
        return (
            <div className="message-board-container">
                <h2 className="message-board-title">My Messages</h2>
                {fauna}
                {button}
            </div>
        );
    }
    else{
        return (
            <div className="message-board-container">
                <h2 className="message-board-title">My Messages</h2>
                {fauna}
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <div className="user-info">
                            <div className="message-image"><img src={getCharacter()} alt="message-icon" style={{backgroundColor: generateBackgroundColor()}}></img></div>
                            <div className="message-user">{msg.name}</div>
                        </div>
                        <div className="message-text">
                            <div>{msg.message}</div>
                        </div>
                    </div>
                ))}
                {button}
            </div>
        );
    }
}