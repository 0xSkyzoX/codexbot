import React, { useState } from 'react'
import "./styles/footer.css"
import { Link } from 'react-router-dom'
import "../mobile/footerMobileVersion.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid'
import { useTranslation } from 'react-i18next'
function Footer() {
    const [islangMenuClicked, setIsLangMunuClicked] = useState(false)
    const {t} = useTranslation();
    const ti = t('footer.footerElementsTitles', {returnObjects: true})
    const c1 = t("footer.footerElement1", {returnObjects: true})
    const c2 = t("footer.footerElement2", {returnObjects: true})
    const c3 = t("footer.footerElement3", {returnObjects: true})
    const c4 = t("footer.footerElement4", {returnObjects: true})
    const c5 = t("footer.footerElement5", {returnObjects: true})
    const c6 = t("footer.footerElement6", {returnObjects: true})
    const getLang = localStorage.getItem("lang")
    function CovertLangAl(lg) {
        if (lg === "English") {
            return "en"
        }
        if (lg === "Franch") {
            return "fr"
        }
        if (lg === "Arabic") {
            return "ar"
        }
    }
    return (
        <div style={{ padding: "1px 0px 1px 0px", height: "auto" }} className="footer-body">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img alt='' className='codex-logo' src='./images/codexbotavatar.png' width="45px" />
                <h1 style={{ marginTop: "auto", marginBottom: "7px", marginLeft: "10px" }}>CodeX</h1>


            </div>
            <div >
                <div style={{ display: "flex", justifyContent: "center", fontSize: "1.2rem" }}>
                    <div>
                        <div>
                            <h1 id='footer-title' className='explore-features'>{ti[0]}</h1>
                            <ul style={{ listStyleType: "none" }} className="explore-list">
                                <li><a href='/projects'>{c1[0]}</a></li>
                                <li ><a href='/customize-server' >{c1[1]}</a></li>
                                <li><a href='https://discord.gg/BAeqndHdea' >{c1[2]}</a></li>
                                <li><a href='/code' >{c1[3]}</a></li>
                            </ul>
                        </div>
                        <div style={{ marginTop: "-25px", marginBottom: "30px" }}>
                            <h1 id='footer-title' className='explore-features'>{ti[1]}</h1>
                            <ul style={{ listStyleType: "none" }} className="explore-list">
                                <li><a href='/projects'>{c2[0]}</a></li>
                                <li ><a href='/customize-server' >{c2[2]}</a></li>
                                <li><a href='https://discord.gg/BAeqndHdea' >{c2[3]}</a></li>
                                <li><a href='/code' >{c2[4]}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={getLang === "fr" ? {display: "none"}: { marginTop: "", marginBottom: "30px" } }>
                        <h1 id='footer-title' className='explore-features'>{ti[2]}</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>{c3[0]}</a></li>
                            <li ><a href='/customize-server' >{c3[1]}</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >{c3[2]}</a></li>
                            <li><a href='/code' >{c3[3]}</a></li>
                            <li><a href='/code' >{c3[4]}</a></li>
                        </ul>

                        <div className='followus'>

                            <h1 className='followus-title'>FOLLOW US</h1>
                            <div style={{ marginLeft: "25px" }}>
                                <Link to="">
                                    <img alt='' src='./images/facebook.png' className="follow-icon" />
                                </Link>
                                <Link>
                                    <img alt='' src='./images/twitter.png' className="follow-icon" />
                                </Link>

                                <Link>
                                    <img alt='' src='./images/youtube.png' className="follow-icon" />
                                </Link>
                                <Link to=''>
                                    <img alt='' src='./images/instagram.png' className="follow-icon" />
                                </Link>
                                <Link to=''>
                                    <img alt='' src='./images/link.png' className="follow-icon" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div style={getLang ? {marginLeft: "20px"}:{ marginTop: "0", marginLeft: "-150px", marginBottom: "30px" }} className="about-codex">
                        <h1 id='footer-title' className='explore-features'>{ti[3]}</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>{c4[0]}</a></li>
                            <li ><a href='/customize-server' >{c4[1]}</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >{c4[2]}</a></li>
                            <li><a href='/code' >{c4[3]}</a></li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "", marginBottom: "30px" }} className="commmunity-footer">
                        <h1 id='footer-title' className='explore-features'>{ti[4]}</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>{c5[0]}</a></li>
                            <li ><a href='/customize-server' >{c5[1]}</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >{c5[2]}</a></li>
                            <li><a href='/code' >{c5[3]}</a></li>
                            <li><a href='/code' >{c5[4]}</a></li>
                            <li><a href='/code' >{c5[5]}</a></li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "", marginBottom: "30px" }} className="specialcode-footer">
                        <h1 id='footer-title' className='explore-features'>{ti[5]}</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>{c1[0]}</a></li>
                            <li ><a href='/customize-server' >{c1[1]}</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >{c1[2]}</a></li>
                            <li><a href='/code' >{c6[3]}</a></li>
                            <li><a href='/code' >{c6[4]}</a></li>
                            <li><a href='/code' >{c6[5]}</a></li>
                            <li><a href='/code' >{c6[6]}</a></li>
                            <li><a href='/code' >{c6[7]}</a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div style={{ display: 'flex', marginLeft: "auto" }}>

                <button className='lang-btn' onClick={async (e) => { 
                    if (e.target.className === "lang-btn" || "icon-langauge" || "lang-span") {
                        setIsLangMunuClicked(!islangMenuClicked)
                    }
                    
                    const langStorage = localStorage.getItem("lang")
                    if (e.target.innerHTML === "English" ||e.target.innerHTML === "Franch" ||e.target.innerHTML === "Arabic") {
                        var langType = CovertLangAl(e.target.innerHTML)
                        setIsLangMunuClicked(islangMenuClicked)
                        if (!langStorage) {
                            window.localStorage.setItem("lang", langType)
                            window.location.reload()
                        } else {
                            window.localStorage.removeItem("lang")
                            window.localStorage.setItem("lang", langType)
                            window.location.reload()
                        }
                    }
                }} style={islangMenuClicked ? {marginTop: "-68px"} : {marginTop: "0"} } >
                <div style={{ display: "block" }}>
                <div className={islangMenuClicked ? "show-lang-menu" : "hide-lang-menu"}>
                    <p className='lang-menu-item'>English</p>
                    <p className='lang-menu-item'>Franch</p>
                    <p className='lang-menu-item'>Arabic</p>
                </div>
                <FontAwesomeIcon className="icon-language" id="icon-lang"icon={islangMenuClicked ? faChevronDown : faChevronUp} style={{ marginRight: "9px", marginLeft: "-5px" }} />
                    
                        <span className='lang-span'>Language</span>

                    </div>
                </button>
            </div>
            <div className="footer-rights" style={{ padding: "5px 0px", width: "100%" }}>
                <p style={{ display: "flex", justifyContent: "center" }}>© 2023 All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer