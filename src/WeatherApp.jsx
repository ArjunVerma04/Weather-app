import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
        const [weatherInfo, setWeatherInfo] = useState({
                
          city : "Bangalore",    
          feelsLike: 36.98,
          humidity : 52,
          temp : 33.05,
          tempMax : 33.05,
          tempMin: 33.05,
          weather : "haze",
 
        });

        let updateInfo = (newInfo) => {
               setWeatherInfo(newInfo); 
        }

     return (
     <div>
        <h2 style={{textAlign: "center"}}>Weather App by ❄️ Frosty </h2>
        < SearchBox updateInfo={updateInfo} />
        < InfoBox info={weatherInfo} />
        </div>
        );
}


   
