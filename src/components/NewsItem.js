import React from 'react'

// https://d.newsweek.com/en/full/2329155/dog-struggles-walk-boots.jpg?w=1200&f=c59afe27449543ab9b31282283650cbe

export default function NewsItem(props) {
  let {title,description,imageURL,url} = props;
  const shouldDisplay = imageURL && title !== "[Removed]" && (title.toLowerCase().includes("weather") || title.toLowerCase().includes("forecast")||title.toLowerCase().includes("temperature")||title.toLowerCase().includes("climate") );
  return shouldDisplay? (

    <div id={`${props.mode === 'light' ? 'newsi' : 'dnewsi'}`} className={`${props.mode === 'light' ? 'lborder' : 'dborder'}`} style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column",borderRadius:"10px",width:"300px",margin:"50px"}}>
      <img src={imageURL} alt="" width="300px" style={{borderRadius:"10px 10px 0 0 "}} />
      <div>
        <p className={`${props.mode === 'light' ? 'ltext' : 'dtext'}`} style={{fontSize:"17px",fontWeight:"600",fontFamily:"'Bitter', serif",margin:"9px"}}>{title}</p>
        <p className={`${props.mode === 'light' ? 'ltext' : 'dtext'}`} style={{fontSize:"16px",fontFamily:"'Bitter', serif",margin:"9px"}}>{description}</p>
      </div>
      <button style={{fontSize:"15px",fontFamily:"'Bitter', serif",backgroundColor:"rgb(8, 92, 166)",height:"40px",width:"150px",borderRadius:"10px",margin:"5px",borderStyle:"none"}}><a href={url} target="_blank" rel="noreferrer" style={{color:"aliceblue",textDecoration:"none"}}>Read More...</a></button>
    </div>
  ):null;
}
