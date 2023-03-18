import React from 'react'
import IntroFeature from '../components/elements/featuresIntroduction'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function FeaturePage() {
  return (
    <div>
     <Navbar />
     <IntroFeature />
     <div>
      
     </div>
     <div style={{marginTop: "30rem"}}>
       <Footer />
     </div>
    
    </div>
  )
}

export default FeaturePage