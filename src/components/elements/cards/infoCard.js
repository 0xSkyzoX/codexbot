import React from 'react'
import "./infoCard.css"
import CardInfoBody from './components/cardInfoBod'
import CardInforFooter from './components/cardInfoFooter'
function InfoCard(props) {
  const lang = localStorage.getItem("lang")
  return (
    <div className='features-info-card' style={lang === "fr" ? {width:"310px", height: "fit-content", paddingBottom:"15px"}:{}} id={props.id}>
     <div className='card-info-body' style={lang === "fr" ? {height: "15rem"}: {}}>
          <CardInfoBody title={props.title} icons={props.icons} desc={props.desc} item={props.item} icon={props.icon}/>
     </div>
     <hr style={{border: "0",
  height: "2px",
  marginRight: "20px",
  marginTop: "20px",
  backgroundImage: "linear-gradient(-90deg, rgba(109, 109, 109, 0.432), transparent)"}}/>
     <div className='card-info-footer'>
          <CardInforFooter footTitle={props.footTitle}/>
     </div>
    </div>
  )
}

export default InfoCard