import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord} from "@fortawesome/free-brands-svg-icons"
import {faTerminal, faStar, faHome} from "@fortawesome/fontawesome-free-solid"
import { useTranslation } from 'react-i18next'
function Navbar() {
    function closeSidebar() {
      document.getElementById('sidebar').classList.add("inactive")
    }
    const {t} = useTranslation()
    const navbarItems = t('navbar.items', {returnObjects: true})
    const lang = localStorage.getItem("lang")
  return (
    <div>
      <div id="sidebar" className='inactive'>
        <div style={{display: "flex"}}>
          <img alt='' src='./images/codexbotavatar.png' style={{borderRadius: "30px", position: "relative",marginBottom: "0px",border: "solid 1px grey", margin: "10px" }} width='32px' ></img>
          <h3 style={{color: "#7289da", marginTop: "auto", marginBottom: "auto"}}>{t("navbar.title")}</h3>
          <img alt='' src='./images/arrow-custom.png' width='17px' height='20px' style={{display: "flex", marginLeft: "auto", marginRight: "15px", marginTop: "auto", marginBottom: "auto"}} onClick={() => {closeSidebar()}}></img>
        </div>
        <hr style={{border: "0", backgroundImage: "linear-gradient(90deg, grey, transparent)",height: "2px"}}></hr>
        
        <div className='sidebar-items'>
        <a href='/' style={{textDecoration: "none"}}>
          <p className='sidebar-item'><FontAwesomeIcon icon={faHome} className="sidebar-item-icon"/><span>{navbarItems[3]}</span></p>
          </a >
          <a href='/features' style={{textDecoration: "none"}}>
          <p className='sidebar-item'><FontAwesomeIcon icon={faStar} className="sidebar-item-icon"/><span>{navbarItems[2]}</span></p>
          </a >
         <a href='/commands' style={{textDecoration: "none"}}>
         <p className='sidebar-item'><FontAwesomeIcon icon={faTerminal}  className="sidebar-item-icon"/><span>{navbarItems[0]}</span></p>
         </a>
         <p className='sidebar-item' onClick={() => {window.open('https://discord.gg/BAeqndHdea')}}><FontAwesomeIcon icon={faDiscord} className= "sidebar-item-icon"/><span>{navbarItems[1]}</span></p>
        </div>
      </div>
      <header className='navbar' style={{display: "flex"}}>
        <div style={{display: "flex"}}>
          <img alt="" className="sidebar-icon" onClick={() => {document.getElementById('sidebar').classList.remove('inactive')}} src='./images/menu5.png' width='40px' height='32px'></img>
            <a href='/' style={{ marginTop: "auto", marginBottom: "5px", borderRadius: "30px"}}>
            <img src='./images/codexbotavatar.png' width='43px' height='43px' style={{ borderRadius: "100px",userSelect: "none", marginLeft: "20px"}} alt="" className='botavatar'/>
            </a>
            <h1 className='cx-bot-title' >{t('navbar.title')}</h1>
        </div>
            <div className='navbar-items'>
            <a id='commands-nav' className='navbar-item' href='/commands'>{navbarItems[0]}</a>
            <a id='discord-nav' className='navbar-item' href='https://discord.gg/BAeqndHdea'>{navbarItems[1]}</a>
            <a id='features-nav' className='navbar-item' href='features'>{navbarItems[2]}</a>
                <Link href='/login'>
                <button className='login-button' style={lang === "ar" || lang === "fr" ? {width: "7rem"}: {}}><p className='login-btn-name'>{t("navbar.button")}</p></button></Link>
            </div>
    </header>
    </div>
  )
}

export default Navbar;