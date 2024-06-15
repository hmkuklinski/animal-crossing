export default function Island(){
    const player= (
        <div className="player-info">
            <div className="player">
                <img src="https://izapislewska.weebly.com/uploads/4/9/8/6/49862713/passport.png" alt="player"></img>
            </div>
            <div className="player-text">
               <div className="player-name">
                    <h2>Hannah</h2>
                    <h3>Island Name: STAY</h3>
                    <h3 className="island-stars">Island Rating: 
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </h3>
                    <h3>Native Fruit: Peach</h3>
                    <h3>Native Flower: Cosmos</h3>
               </div>
                <div className="player-faves">
                    <div className="stat">
                        <h2>Favorite Resident:</h2>
                        <p>Fauna</p>
                    </div>
                    <div className="stat">
                        <h2>Least Favorite Resident:</h2>
                        <p>Diva</p>
                    </div>
                    <div className="stat">
                        <h2>Favorite Activity:</h2>
                        <p>Growing Flowers, Harvesting Fruits</p>
                    </div>
                </div> 
            </div>
        </div>
    );
    return (
        <div className="container">
            <div className="title"><h1>Player Information:</h1></div>
            
            {player}
        </div>
    )
}