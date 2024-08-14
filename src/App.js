import React, { useEffect, useState } from 'react';
import "./App.css";
import { FaSearch } from "react-icons/fa";
import clearIcon from "./accetes/clear.jpeg"
import cloudIcon from "./accetes/cloud.png"
import drizzleIcon from "./accetes/drizzle.jpeg"
import rainIcon from "./accetes/rain.jpg"
import snowIcon from "./accetes/snow.jpeg"
import WeatherDetails from './WeatherDetails';



const App = () => {
  let api_key="94f7686b786b5ce45bd1153403cc416f"
  const[icon,setIcon]=useState(clearIcon);
  const[temp,setTemp]=useState(0);
  const[city,setcity]=useState("chennai")
  const[country,setCountry]=useState("India")
  const[lat,setLat]=useState(0);
  const[log,setLog]=useState(0);
  const[humidity,setHumidity]=useState(0);
  const[wind,setWind]=useState(0);
  const[text,setText]=useState("chennai");
  const[loading,setLoading]=useState(false);
  const[notFound,setNotFound]=useState(false);
  const[ error,seterror]=useState()



const weatherIconMap={
  "01d":clearIcon,
  "01n":clearIcon,
  "02n":cloudIcon,
  "02n":cloudIcon,
  "03n":drizzleIcon,
  "03d":drizzleIcon,
  "04n":drizzleIcon,
  "04d":drizzleIcon,
  "09n":rainIcon,
  "09d":rainIcon,
  "010n":rainIcon,
  "010d":rainIcon,
  "013n":snowIcon,
  "013n":snowIcon,


}

  const search=async ()=>{
    setLoading(true);
 let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
  
try{
  let res= await fetch(url);
  let data=await res.json();
  // console.log(data);
if(data.cod==="404"){
console.log(" Class not Found");

  setLoading(false);
  setNotFound(true);
  return;}
setHumidity(data.main.humidity);
setWind(data.wind.speed);
setTemp(Math.floor(data.main.temp));
setcity(data.name);
setCountry(data.sys.country);
setLat(data.coord.lat);
setLog(data.coord.lon);  
const weatherIconCode=data.weather[0].icon;

setIcon(weatherIconMap[weatherIconCode] || cloudIcon);
setNotFound(false);

}catch(err){
console.log(" An error Occured :",err.message);
seterror("An error occured while fetching weather data");
}finally{
setLoading(false);
}

};

 const handleCity=(e)=>{
  setText(e.target.value);
 };

 const handleKeyDown=(e)=>{
  if(e.key==="Enter"){
    search();
  }
 }

 useEffect(function(){
  search();
  },[])
  


  return (
   <div className='container'>
    <div className='input-container'>
      <input type="text" className='cityInput' placeholder='search city'  onChange={handleCity}  value={text} onKeyDown={handleKeyDown}/>
      <div className='search-icon' onClick={()=>search()}>
      <FaSearch />
      </div>
    </div>
 
{ loading && <div className="loading"> Loading.....</div>}
 {error &&<div className='error-message'>{error}</div>}
{notFound &&  <div className='citynotfound' > City not Found</div>}  
{!loading && !notFound &&<WeatherDetails  icon={icon} temp={temp} city={city} country={country}
  lat={lat} log={log} humidity={humidity} wind={wind}/>}
   <p className='copyright'> 
      Designed by <a href='https://wa.link/0x62oc'>devPraveen</a>
    </p>
   </div>
  );
}

export default App;
