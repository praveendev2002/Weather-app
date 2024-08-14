import humidityIcon from "./accetes/humidity.jpg";
import windIcon from "./accetes/wind.jpg"


const WeatherDetails =({icon,temp,city,country,lat,log,humidity,wind})=>{

    return(
  <>
  
  <div className='images'>
  <img src={icon} alt='image'/>
  </div>
  <div className='temp'>{temp}<span>&#176;</span>C</div>
  <div className='location'>{city}</div>
  <div className='country'>{country}</div>
  <div className='cord'>
    <div>
      <span className='lat'>latitude</span>
      <span>{lat}</span>
    </div>
    <div>
      <span className='log'>longitude</span>
      <span>{log}</span>
    </div> 
  </div>
  <div className='data-container'>
    <div className='element'>
      <img src={ humidityIcon} alt='humidity' className='icon'/>
      <div className='data'> 
        <div className='humidity-percent'>{humidity} %</div>
        <div className='text'>Humidity</div>
      </div>
    </div>
    <div className='element'>
      <img src={ windIcon} alt='humidity' className='icon'/>
      <div className='data'> 
        <div className='humidity-percent'> {wind} km/h</div>
        <div className='text'>Wind Speed</div>
      </div>
     
  </div>
  
  </div>
  
  </>
  
    );
  };
  
  export default WeatherDetails;