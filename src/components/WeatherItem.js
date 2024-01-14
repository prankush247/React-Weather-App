import React from 'react'

export default function WeatherItem(props) {
  return (
    <div style={{height: '15vh',width:'5.7vw',display:'flex',alignItems: 'center',justifyContent:'space-around',flexDirection:'column',borderBottomWidth:'2px',borderRightWidth:'2px',borderBottomStyle:'solid',borderRightStyle:'solid',fontSize:'14px'}} id={`${props.mode === 'light' ? 'weatheriL' : 'weatheriD'}`}>
        <div style={{textAlign:"center"}}>{props.date}</div>
            <img src={props.imageURL} width="35px" alt=""/>
        <div style={{textAlign:"center"}}>{props.description}</div>
    </div>
  )
}
