import React from 'react'
import "./css/card.css"
function CardInforFooter(props) {
  return (
    <div>
     <h2 className='footer-title'><span>{props.footTitle}</span></h2>
    </div>
  )
}

export default CardInforFooter