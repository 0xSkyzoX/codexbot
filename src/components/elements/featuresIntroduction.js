import React from 'react'
import SetInfoData from './cards/components/setData'
import InfoCard from './cards/infoCard'
import "./css/features.css"
function IntroFeature() {
  return (
    <div>
      <div style={{display: "flex"}}>
         <div>
      <h1 style={{color: "whitesmoke", margin: "70px 10px 20px 6rem"}} className="features-page-title">Start your Coding <br />Experience with<br />our Features</h1>
     <p style={{ marginLeft: "7rem", }} className="description-features-page">Best try with our features, learn, enjoy and code while you <br/> using our features will be the best, Try our features <a href='./features/start' style={{textDecoration: "none"}} className="a-btn-features">here</a>!</p>
      </div>
     <SetInfoData />
      </div>
     
     
    </div>
  )
}

export default IntroFeature