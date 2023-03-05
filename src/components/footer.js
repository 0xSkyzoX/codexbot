import React from 'react'
import "./styles/footer.css"
import { Link } from 'react-router-dom'
import "../mobile/footerMobileVersion.css"
function Footer() {
    return (
        <div style={{  padding: "1px 0px 1px 0px", height: "auto" }} className="footer-body">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img alt='' className='codex-logo' src='./images/codexbotavatar.png' width="45px" />
                <h1 style={{ marginTop: "auto", marginBottom: "7px", marginLeft: "10px" }}>CodeX</h1>
            </div>
            <div >
                <div style={{ display: "flex" }}>
                    <div>
                        <div>
                            <h1 id='footer-title' className='explore-features'>Explore Features</h1>
                            <ul style={{ listStyleType: "none" }} className="explore-list">
                                <li><a href='/projects'>Code Projects</a></li>
                                <li ><a href='/customize-server' >Customize server</a></li>
                                <li><a href='https://discord.gg/BAeqndHdea' >our Discord Server</a></li>
                                <li><a href='/code' >Coding is Special</a></li>
                            </ul>
                        </div>
                        <div style={{ marginTop: "-25px", marginBottom: "30px" }}>
                            <h1 id='footer-title' className='explore-features'>CodeX Bot</h1>
                            <ul style={{ listStyleType: "none" }} className="explore-list">
                                <li><a href='/projects'>Start your Project</a></li>
                                <li ><a href='/customize-server' >Share your Code</a></li>
                                <li><a href='https://discord.gg/BAeqndHdea' >Explore More Projects</a></li>
                                <li><a href='/code' >Start Team Work</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: "", marginBottom: "30px" }}>
                        <h1 id='footer-title' className='explore-features'>Overview</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>About</a></li>
                            <li ><a href='/customize-server' >Contact</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >Learn CodeX</a></li>
                            <li><a href='/code' >Terms of Use</a></li>
                            <li><a href='/code' >Privicy Policy</a></li>
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
                    <div style={{ marginTop: "0", marginLeft: "-150px", marginBottom: "30px" }} className="about-codex">
                        <h1 id='footer-title' className='explore-features'>About CodeX</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>What's CodeX bot?</a></li>
                            <li ><a href='/customize-server' >Learn About Coding Team...</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >How to start a Project?</a></li>
                            <li><a href='/code' >Discord Server, Community...</a></li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "", marginBottom: "30px" }} className="commmunity-footer">
                        <h1 id='footer-title' className='explore-features'>Community</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>TeamX Community</a></li>
                            <li ><a href='/customize-server' >Work Together</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >Share your Code</a></li>
                            <li><a href='/code' >Add Project Friends</a></li>
                            <li><a href='/code' >General Discord Chat</a></li>
                            <li><a href='/code' >Open Your own team</a></li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "", marginBottom: "30px" }} className="specialcode-footer">
                        <h1 id='footer-title' className='explore-features'>Special Code</h1>
                        <ul style={{ listStyleType: "none" }} className="explore-list">
                            <li><a href='/projects'>About Special Code</a></li>
                            <li ><a href='/customize-server' >Discord Server</a></li>
                            <li><a href='https://discord.gg/BAeqndHdea' >Official Website</a></li>
                            <li><a href='/code' >How to start your Business?</a></li>
                            <li><a href='/code' >How to share Projects?</a></li>
                            <li><a href='/code' >Future of Programming</a></li>
                            <li><a href='/code' >Special Code Projects</a></li>
                            <li><a href='/code' >Learn More Features</a></li>
                        </ul>
                    </div>
                    
                </div>

            </div>
                    <div className="footer-rights"style={{padding: "5px 0px", width: "100%"}}>
                        <p style={{display: "flex", justifyContent: "center"}}>© 2023 All rights reserved.
</p>
                    </div>
        </div>
    )
}

export default Footer