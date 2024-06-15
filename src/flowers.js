import Flower from "./flower";
export default function Flowers(){
    //will have all the necessary elements for each color rose- type, image link, alternate description, count of how many I have on my island
    const rosesData= [
        {type: "red rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-roses.png", count: 41, alt:"red rose"},
        {type: "pink rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-roses.png", count: 19 , alt:"pink rose"},
        {type: "white rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-roses.png", count: 12, alt:"white rose"},
        {type: "yellow rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-roses.png", count: 16, alt:" yellow rose"},
        {type: "blue rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/blue-roses.png", count: 10 , alt:"blue rose"},
        {type: "purple rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-roses.png", count: 7, alt:"purple rose"},
        {type: "black rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/black-roses.png", count: 7, alt:"rose"},
        {type: "gold rose", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/gold-roses.png", count: 1, alt:"gold rose"},
        {type: "orange rose", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-roses.png", count: 0, alt: "orange rose"}
        
    ];

    const windflowerData=[
        {type:"white windflower", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-windflowers.png", count: 4, alt:"white windflower" },
        {type:"orange windflower", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-windflowers.png", count: 6, alt: "orange windflower"},
        {type:"red windflower", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-windflowers.png", count: 3, alt: "red windflower"},
        {type:"blue windflower", imageSrc: "https://preview.redd.it/looking-for-blue-windflower-v0-du7zss7hod9c1.png?auto=webp&s=791cbe90e523751c25c9e49aaa577cf4f9f01911", count: 1, alt: "blue windflower"},
        {type:"pink windflower", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-windflowers.png", count: 2, alt: "pink windflower"},
        {type:"purple windflower", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-windflowers.png", count: 0, alt: "purple windflower"}
    ];

    const tulipData =[
        {type:"white tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-tulips.png", count: 8, alt: "white tulip"},
        {type:"red tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-tulips.png", count: 0, alt: "red tulip"},
        {type:"black tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/black-tulips.png", count: 0, alt: "black tulip"},
        {type:"yellow tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-tulips.png", count: 0, alt: "yellow tulip"},
        {type:"purple tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-tulips.png", count: 0, alt: "purple tulip"},
        {type:"pink tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-tulips.png", count: 0, alt: "pink tulip"},
        {type:"orange tulip", imageSrc: "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-tulips.png", count: 0, alt: "orange tulip"}
    ];

    const pansyData=[
        {type:"blue pansy", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/blue-pansies.png", count: 2, alt:"blue pansy"},
        {type:"orange pansy", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-pansies.png", count: 8, alt:"orange pansy"},
        {type:"purple pansy", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-pansies.png", count: 0, alt:"purple pansy"},
        {type:"red pansy", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-pansies.png", count: 22, alt:"red pansy"},
        {type:"white pansy", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-pansies.png", count: 10, alt:"white pansy"},
        {type:"yellow pansies", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-pansies.png", count: 10, alt:"yellow pansy"}
    ];

    const mumData=[
        {type:"green mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/green-mums.png", count: 6, alt:"green mums"},
        {type:"pink mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-mums.png", count: 16, alt:"pink mums"},
        {type:"purple mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-mums.png", count: 13, alt:"purple mums"},
        {type:"red mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-mums.png", count: 13, alt:"red mums"},
        {type:"white mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-mums.png", count: 8, alt:"white mums"},
        {type:"yellow mums", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-mums.png", count: 13, alt:"yellow mums"}
    ];

    const lilyData=[
        {type:"black lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/black-lilies.png", count: 3, alt:"black lily"},
        {type:"orange lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-lilies.png", count: 0, alt:"orange lily"},
        {type:"pink lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-lilies.png", count: 10, alt:"pink lily"},
        {type:"red lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-lilies.png", count: 10, alt:"red lily"},
        {type:"white lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-lilies.png", count: 5, alt:"white lily"},
        {type:"yellow lily", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-lilies.png", count: 4, alt:"yellow lily"}
    ];

    const hyacinthData=[
        {type:"blue hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/blue-hyacinths.png", count: 0, alt:"blue hyacinths"},
        {type:"orange hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-hyacinths.png", count: 0, alt:"orange hyacinths"},
        {type:"pink hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-hyacinths.png", count: 0, alt:"pink hyacinths"},
        {type:"purple hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/purple-hyacinths.png", count: 0, alt:"purple hyacinths"},
        {type:"red hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-hyacinths.png", count: 0, alt:"red hyacinths"},
        {type:"white hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-hyacinths.png", count: 0, alt:"white hyacinths"},
        {type:"yellow hyacinths", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-hyacinths.png", count: 0, alt:"yellow hyacinths"}
    ];

    const cosmosData =[
        {type:"black cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/black-cosmos.png", count: 0, alt:"black cosmos"},
        {type:"orange cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/orange-cosmos.png", count: 13, alt:"orange cosmos"},
        {type:"pink cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/pink-cosmos.png", count: 14, alt:"pink cosmos"},
        {type:"red cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/red-cosmos.png", count: 28, alt:"red cosmos"},
        {type:"white cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-cosmos.png", count: 14, alt:"white cosmos"},
        {type:"yellow cosmos", imageSrc:"https://acnh.co/assets/img/nintendo-switch-acnh-flowers/yellow-cosmos.png", count: 13, alt:"yellow cosmo"}
    ];

    //want to store all the data about the different flower types in one array (roses, tulips, windflowers, cosmos, mums, etc...)
    const allFlowers= [
        {
            flowerGroup: "Roses",
            data: rosesData //will get data from rosesData array
        },
        {
            flowerGroup: "Windflowers",
            data: windflowerData
        },
        {
            flowerGroup:"Tulips",
            data: tulipData
        },
        {
            flowerGroup: "Cosmos",
            data: cosmosData
        },
        {
            flowerGroup: "Hyacinths",
            data: hyacinthData
        },
        {
            flowerGroup: "Lilies",
            data: lilyData
        },
        {
            flowerGroup: "Mums",
            data: mumData
        },
        {
            flowerGroup: "Pansies",
            data: pansyData
        }
    ];

    return (
        <div className="f-container">
            <div className="title"><h1>My Flowers</h1></div>
            <div className="all-flowers">
            {allFlowers.map((flowers, index) => (
                <div key={index} className="flower-group">
                    <div className="flower-title">
                        <h2>{flowers.flowerGroup}</h2>
                    </div>
                     <div className="flowers">
                        {flowers.data.map((flower, flowerIndex) => (
                            <Flower key={flowerIndex} flowerData={flower} />
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}