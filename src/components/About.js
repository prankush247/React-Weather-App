import React from 'react'

export default function About(props) {
  return (
    <div style={{height:'75vh',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <div className={`${props.mode === 'light' ? 'abouts' : 'aboutsD'}`}>
        This web app uses Geoapify API to fetch your city level location using your IP
      </div>
      <div className={`${props.mode === 'light' ? 'abouts' : 'aboutsD'}`}>Openweather API is used to fetch the current weather data and 5 days weather forecast</div>
      <div className={`${props.mode === 'light' ? 'abouts' : 'aboutsD'}`}>NewsAPI is used to fetch news data from weather category</div>
      <div className={`${props.mode === 'light' ? 'abouts' : 'aboutsD'}`} style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'column'}}><p style={{padding:'9px'}}>Thanks for visiting! </p>
      <img src="hands.png" width="40px" alt="" /></div>  
    </div>
  )
}
