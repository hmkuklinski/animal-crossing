export default function Flower({flowerData}){
    return (
        <div className="flower">
            <div className="flower-img">
                <img src={flowerData.imageSrc} alt={flowerData.alt}></img>
            </div>
            <div className="flower-counter">
                <h3>{flowerData.count}</h3>
            </div>      
        </div>
    );
}