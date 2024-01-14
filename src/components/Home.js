import React from 'react'
import { useEffect,useState } from 'react'
import MainWeather from './MainWeather';
import WeatherItem from './WeatherItem';
export default function Home(props) {
  const [weatherData,setWeatherdata] =  useState([]);
  const [weatherForecastData,setWeatherForecastdata] =  useState([]);
  // const [cityName,setCityName] = useState('');
  useEffect(()=>{
    const fetchInitialdata = async() =>{
      try{

        const response1 = await fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=fedfad0353b44eac877bb867ef618aef');
        const data = await response1.json();
        // setCityName(data.city.name)
        fetchWeatherData(data.city.name)
      }
      catch(error){
        console.log("An error occurred while fetching the city name :",error)
      }
        // const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city.name}&appid=42d28598d8498ed311b177ab7b170f2b`)
        // const apiData = await response2.json()
      // console.log(apiData)
      // setWeatherdata([apiData])
      
    };
    fetchInitialdata();
  },[]);
  const fetchWeatherData = async (cityName) => {
    try {
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=42d28598d8498ed311b177ab7b170f2b`);
      const apiData = await response2.json();
  
      if (apiData.coord) {
        setWeatherdata([apiData]);
        fetchForecast(apiData.coord.lon, apiData.coord.lat);
      } else {
        console.log('Could not retrieve coordinates for the city.');
      }
    } catch (error) {
      console.log('An error occurred while fetching weather data:', error);
    }
  };
  
      // const [forecastData, setForecastData] = useState([]);
      const fetchForecast = async(longitude,latitude) =>{
        const response3 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0014c74507042b98f4f31e3090c4a218`)
        const apiForecastData = await response3.json()
        console.log(apiForecastData)
        setWeatherForecastdata(apiForecastData.list)

  }
  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}} id={`${props.mode === 'light' ? 'backHw' : 'backHwd'}`}>
      {weatherData.map((item) => (
        <MainWeather
          city = {item.name}
          country = {item.sys ? item.sys.country : 'N/A'}
          weather={item.weather && item.weather.length > 0 ? item.weather[0].main : 'N/A'}
          weatherDesc={item.weather && item.weather.length > 0 ? item.weather[0].description : 'N/A'}
          temperature={item.main ? item.main.temp - 273 : 'N/A'}
          windSpeed={item.wind ? item.wind.speed : 'N/A'}
          humidity={item.main ? item.main.humidity : 'N/A'}
          mode={props.mode}
          imageURL={getWeatherImageURL(item.weather && item.weather.length > 0 ? item.weather[0].description : '', props.mode)}
          sunrise={item.sys ? item.sys.sunrise : 'N/A'}
          sunset={item.sys ? item.sys.sunset : 'N/A'}
          fetchWeatherData={fetchWeatherData}
        />
      ))}
    </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}} id={`${props.mode === 'light' ? 'forecastLArea' : 'forecastDArea'}`}>
          <div style={{height:'65vh',width:'61vw',display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}} id={`${props.mode === 'light' ? 'forecastL' : 'forecastD'}`}>
          {/* {newsData.map((item) => (
        <NewsItem
          key={item.url}
          title={item.title}
          url={item.url}
          description={item.description}
          imageURL={item.urlToImage}
          mode={props.mode}
        />
      ))} */}
        {weatherForecastData.map((item) => (
    <WeatherItem 
        mode={props.mode} 
        key={item.dt_txt} 
        date={item.dt_txt} 
        description={item.weather[0].description?item.weather[0].description:'!'} 
        imageURL={getWeatherImageURL(item.weather && item.weather.length > 0 ? item.weather[0].description : '', props.mode)}/>
  ))}
        
            
          </div>
        </div>
    </div>

  )
}
const getWeatherImageURL = (weatherDesc,mode) => {
  let imageURL = '';

  if (weatherDesc.includes('clear')) {
      imageURL = 'sun.png';
    
  }
   else if (weatherDesc.includes('rain')) {
    if(mode==='light'){
      imageURL = 'rain.png';
    }
    else{
      imageURL='rain-dark.png'
    }
  } 
  else if (weatherDesc.includes('snow')) {
    if(mode==='light'){
      imageURL = 'snow.png';
    }
    else{
      imageURL='snow-dark.png'
    }
  } else if (weatherDesc.includes('smoke') || weatherDesc.includes('haze')) {
    if(mode==='light'){
      imageURL = 'haze.png'
    }
    else{
      imageURL = 'haze-dark.png'
    }
  } else if (weatherDesc.includes('overcast')) {
    if(mode==='light'){
      imageURL = 'overcast.png';
    }
    else{
      imageURL = 'overcast-dark.png'
    }
  } else if (weatherDesc.includes('few clouds')) {
    if(mode==='light'){
      imageURL = 'cloudy-day.png';
    }
    else{
      imageURL = 'cloudy-day-dark.png'
    }
    
  } else if (weatherDesc.includes('clouds')) {
    imageURL = 'clouds.png';
  } else if (weatherDesc.includes('thunderstorm')) {
    if(mode==='light'){
      imageURL = 'thunderstorm.png';
    }
    else{
      imageURL = 'thunderstorm-dark.png'
    }
  } else if (weatherDesc.includes('dust')) {
    if(mode==='light'){
      imageURL = 'dust.png';
    }
    else{
      imageURL = 'dust-dark.png'
    }
  } else if (weatherDesc.includes('drizzle')) {
    if(mode==='light'){
      imageURL = 'drizzle.png';
    }
    else{
      imageURL = 'drizzle-dark.png'
    }
  } else if (weatherDesc.includes('mist')) {
    imageURL = 'mist.png';
  }

  return imageURL;
};