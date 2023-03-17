import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/fontawesome-free-solid'
import "./css/card.css"
function CardInforFooter(props) {
  return (
    <div>
     <h2 className='footer-title'><span>{props.footTitle}</span></h2>
    </div>
  )
}

export default CardInforFooter