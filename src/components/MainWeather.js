import React,{useState} from 'react';

export default function MainWeather(props) {
  const { city, country, weather, weatherDesc, temperature, windSpeed, humidity, imageURL, sunrise, sunset } = props;
  const sunrise24 = new Date(sunrise * 1000).toLocaleTimeString('en-US', { hour12: false });
  const sunset24 = new Date(sunset * 1000).toLocaleTimeString('en-US', { hour12: false });
  const [cityInput, setCityInput] = useState('');
  const handleFetchWeather = () => {
    // Fetch weather data when the button is clicked
    props.fetchWeatherData(cityInput);
  };
  return (
    <div style={{ height: '50vh', width: '43vw', display: 'flex', borderWidth: '2px',borderStyle:'solid'}} className={`${props.mode === 'light' ? 'mainwl ' : 'mainwd'}`} id={`${props.mode === 'light' ? 'backGcl' : 'backGcb'}`}>
      <div style={{ height: '50vh', width: '30vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRightWidth:'2px',borderRightStyle:'solid'}} className={`${props.mode === 'light' ? 'mainwlr' : 'mainwdr'}`}>
        <div style={{ height: '10vh', width: '30vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>
            <input type="text" style={{ height: '40px', borderRadius: '20px', width: '200px', padding: '3px' }} id={`${props.mode === 'light' ? '' : 'searchinp'}`} placeholder="Enter a city ..." onChange={(e)=>setCityInput(e.target.value)}/>
          </span>
          <span>
            <button  style={{ marginLeft: '9px', height: '40px', width: '40px', borderRadius: '50%' }} id={`${props.mode === 'light' ? 'searchB' : 'searchbd'}`}  onClick={handleFetchWeather}>🔎</button>
          </span>
        </div>
        <div style={{ height: '28vh', width: '30vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={imageURL} alt="<?>City N/A</?>" style={{ width: '200px' }}/>
        </div>
        <div style={{ height: '12vh', width: '30vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <p style={{ fontSize: '24px', margin: '0' }}>{parseInt(temperature)}°C, {weatherDesc}</p>
          <p style={{ fontSize: '20px', margin: '0' }}>{city}, {country}</p>
        </div>
      </div>
      <div style={{ height: '50vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column' }}>
        <div style={{ height: '16vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', borderBottomWidth:'1px', borderBottomStyle:'solid'}} className={`${props.mode === 'light' ? 'mainwlb' : 'mainwdb'}`}>
          <img src={`${props.mode === 'light' ? 'humidity.png' : 'humidity-dark.png'}`} alt="" width="50px" />
          <p style={{ margin: '0' }}>Humidity : {humidity}%</p>
        </div>
        <div style={{ height: '16vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', borderBottomWidth:'1px', borderBottomStyle:'solid'}}  className={`${props.mode === 'light' ? 'mainwlb' : 'mainwdb'}`}>
          <img src={`${props.mode === 'light' ? 'winds.png' : 'winds-dark.png'}`} alt="" width="50px" />
          <p style={{ margin: '0' }}>Wind Speed : {windSpeed}m/s</p>
        </div>
        <div style={{ height: '16vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ height: '9vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`${props.mode === 'light' ? 'sunrise.png' : 'sunrise-dark.png'}`} width="70px" alt="" />
          </div>
          <div style={{ height: '7vh', width: '13vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <p style={{ margin: '0' }}>Sunrise: {sunrise24}</p>
            <p style={{ margin: '0' }}>Sunset : {sunset24}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
