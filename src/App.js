import React from 'react'
import Navbar from './components/navbar'
import "./App.css"
import { useTranslation } from 'react-i18next'
import Footer from './components/footer'


function App() {
  const { t } = useTranslation()
  const indexTitle = t('indexPage.indexTitle', { returnObjects: true })
  const mobileDescription = t('indexPage.indexDescriptionMobile', { returnObjects: true })
  const itemF = t("indexPage.indexItemTitleFeatures", { returnObjects: true })
  const itemD = t("indexPage.indexItemDescriptionFeatures", { returnObjects: true })
 var lang = localStorage.getItem("lang")
  var isAccess = localStorage.getItem("access_token")
    /**
     * style={lang === "fr" ? {marginRight: "15px", marginLeft: "3rem", fontSize: "15px"} : {}}
     */
  return (
    <div >
      <Navbar />
      <main >
        <div style={lang === "ar" ? {display: "flex", flexDirection: "row-reverse"} :{ display: "flex"}} className="flexing-index-intro">
          <div className='index-intro-content'>
            <h1 style={lang === "ar" ? {textAlign: "end"} : {}} className={lang === "fr" ? "title-index-page-fr" : "title-index-page" }  id='indexpagetitle'>{indexTitle[0]}<br />{indexTitle[1]}<br />{indexTitle[2]}</h1>
            <p className='description-index-page-mobile' >{t("indexPage.indexDescription")}</p>
            <p className='description-index-page' style={lang === "fr" ? {marginLeft: "3.5rem"} : {}}>{mobileDescription[0]}<br />{mobileDescription[1]}</p>
            <button className="start-button-index" style={lang === "ar"?{marginLeft: "auto",display: "flex", marginRight: "3rem"} : {}} onClick={() => isAccess ? window.location.replace("https://localhost:3000/home") : window.open('http://codexbot.xyz/login')}>{t("indexPage.indexGetstarted")}</button>
          </div>
          <img src='./images/snap5.png' width='55%' height='35%' alt='' style={lang === "ar" ?{marginRight: "2rem", marginTop: "90px", opacity: 0.9}:{ marginTop: "90px", opacity: 0.9 }} className="img-coding-index" />
        </div>
      </main>
      <h1 className='features-index-title' style={{ textAlign: "center" }}>{t("indexPage.indexTitleFeatures")}</h1>
      <hr style={{
        margin: "0px 7%",
        border: "0",
        height: "3px",
        backgroundImage: "linear-gradient(0deg, grey, transparent)"
      }} />
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          <img alt='' src='./images/sclogo.png' width='140px' id='features-index-img' />
          <div id='features-index-tide'>
            <div style={{ display: "flex" }}>
              <img alt='' src='./images/sclogo.png' width='140px' id='features-index-img-mobile' />
              <h1 id='features-index-title'>{itemF[0]}</h1>
            </div>
            <div  >
              <p id='features-index-description'>{itemD[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{
        margin: "0 40% 0px 1%", border: "0",
        height: "3px",
        backgroundImage: "linear-gradient(90deg, grey, transparent)",
      }}></hr>
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          <div id='features-index-tide' className='pc-tide'>
            <div>
              <div style={{ display: "flex" }}>
                <h1 id='features-index-title' className='pc'>{itemF[1]}</h1>
                <img alt='' src='./images/codexsupport.png' width='140px' id='features-index-img-mobile' className='cc-img' />
              </div>
              <p id='features-index-description' className='pc-descrip' >{itemD[1]}</p>
            </div>
          </div>
          <img alt='' src='./images/codexsupport.png' width='140px' id='features-index-img' className='cxs' />
        </div>
      </div>
      <hr style={{
        margin: "0 1% 0 40%", border: "0",
        height: "3px",
        backgroundImage: "linear-gradient(-90deg, grey, transparent)",
      }} />
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          <img alt='' src='./images/codexbotavatar.png' width='140px' id='features-index-img' />
          <div id='features-index-tide'>
            <div style={{ display: "flex" }}>
              <img alt='' src='./images/codexbotavatar.png' width='140px' id='features-index-img-mobile' />
              <h1 id='features-index-title' >{itemF[2]}</h1>
            </div>
            <div >
              <p id='features-index-description'>{itemD[2]}</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{
        margin: "70px 7%", border: "0",
        height: "3px",
        backgroundImage: "linear-gradient(0deg, grey, transparent)",
      }} />
      <Footer />
    </div>
  )
}

export default App