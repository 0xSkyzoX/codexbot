import React from 'react'
import "./css/card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardInfoBody(props) {
  const lang = localStorage.getItem("lang")
  return (
    <div >
     <h1 style={lang === "fr"?{display: "flex", justifyContent: "center", fontSize: "1.6rem"}:{display: "flex", justifyContent: "center"}} className="card-title"><FontAwesomeIcon icon={props.icon} className="card-icon"/>{props.title}</h1>
     <p className='card-litle-desc'>{props.desc}</p>
     <hr className='hr-line-card'/>
     <ul className='features-coding' style={lang === "fr" ? {fontSize: "15px"}:{}}>
          <li><FontAwesomeIcon icon={props.icons[0]} className="icon-code"/>{props.item[0]}</li>
          <li><FontAwesomeIcon icon={props.icons[1]} className="icon-code"/>{props.item[1]}</li>
          <li><FontAwesomeIcon icon={props.icons[2]} className="icon-code"/>{props.item[2]}</li>
          <li><FontAwesomeIcon icon={props.icons[3]} style={{marginRight: "22px", marginLeft: "2px"}} className="icon-code"/>{props.item[3]}</li>
     </ul>
    </div>
  )
}

export default CardInfoBody