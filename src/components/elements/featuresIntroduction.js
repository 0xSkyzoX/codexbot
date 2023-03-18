import React from 'react'
import SetInfoData from './cards/components/setData'
import "./css/features.css"
import { useTranslation } from 'react-i18next'

function IntroFeature() {
  const {t} = useTranslation()
  const title = t("featuresPage.title", {returnObjects: true})
  const description = t("featuresPage.description", {returnObjects: true})
  return (
    <div>
      <div style={{display: "flex"}}>
         <div>
      <h1 style={{color: "whitesmoke", margin: "70px 10px 20px 6rem"}} className="features-page-title">{title[0]}<br />{title[1]}<br />{title[2]}</h1>
     <p style={{ marginLeft: "7rem", }} className="description-features-page">{description[0]}<br/>{description[1]}<a href='./features/start' style={{textDecoration: "none"}} className="a-btn-features">here</a>!</p>
      </div>
     <SetInfoData />
      </div>
     
     
    </div>
  )
}

export default IntroFeature