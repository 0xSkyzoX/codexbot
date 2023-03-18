import React from 'react'
import SetInfoData from './cards/components/setData'
import "./css/features.css"
import { useTranslation } from 'react-i18next'

function IntroFeature() {
  const {t} = useTranslation()
  const title = t("featuresPage.title", {returnObjects: true})
  const description = t("featuresPage.description", {returnObjects: true})
  const lang = localStorage.getItem("lang")
  return (
    <div>
      <div style={lang === "ar" ? {display: 'flex', flexDirection: "row-reverse"}:{display: "flex"}}>
         <div>
      <h1 style={lang === "ar"? {color: "whitesmoke", margin: "70px 7rem 20px 10rem", textAlign: "end"}:{color: "whitesmoke", margin: "70px 10px 20px 6rem"}} className="features-page-title">{title[0]}<br />{title[1]}<br />{title[2]}</h1>
     <p style={lang === "ar" ? {textAlign: "end", marginRight: "6rem"}:{ marginLeft: "7rem", }} className="description-features-page">{description[0]}<br/>{description[1]}<a href='/features/start' style={{textDecoration: "none"}} className="a-btn-features">Here!</a></p>
      </div>
     <SetInfoData />
      </div>
     
     
    </div>
  )
}

export default IntroFeature