import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/navbar.css"

function Navbar() {
    function closeSidebar() {
      document.getElementById('sidebar').classList.add("inactive")
    }
  return (
    <div>
      <div id="sidebar" className='inactive'>
        <div style={{display: "flex"}}>
          <img alt='' src='./images/codexbotavatar.png' style={{borderRadius: "30px", position: "relative",marginBottom: "0px",border: "solid 1px grey", margin: "10px" }} width='32px'></img>
          <h3 style={{color: "#7289da", marginTop: "auto", marginBottom: "auto"}}>CodeX</h3>
          <img alt='' src='./images/arrow-custom.png' width='17px' height='20px' style={{display: "flex", marginLeft: "auto", marginRight: "15px", marginTop: "auto", marginBottom: "auto"}} onClick={() => {closeSidebar()}}></img>
        </div>
        <hr style={{border: "solid 1px grey"}}></hr>
        <div className='sidebar-items'>
          <Link to='./features' style={{textDecoration: "none"}}>
          <p className='sidebar-item'><img alt="" src='./images/features.png' className='sidebar-item-icon' /><span>Features</span></p>
          </Link >
         <Link to='./commands' style={{textDecoration: "none"}}>
         <p className='sidebar-item'><img alt="" src='./images/commands.png' className='sidebar-item-icon' /><span>Commands</span></p>
         </Link>
         <p className='sidebar-item' onClick={() => {window.open('https://discord.gg/BAeqndHdea')}}><img alt="" src='./images/i.png' className='sidebar-item-icon' /><span>Support Server</span></p>
        </div>
      </div>
      <header className='navbar' style={{display: "flex"}}>
        <div style={{display: "flex"}}>
          <img alt="" className="sidebar-icon" onClick={() => {document.getElementById('sidebar').classList.remove('inactive')}} src='./images/menu5.png' width='40px' height='32px'></img>
            <a href='/' style={{ marginTop: "auto", marginBottom: "5px", borderRadius: "30px"}}>
            <img src='./images/codexbotavatar.png' width='43px' height='43px' style={{ borderRadius: "100px",userSelect: "none", marginLeft: "20px"}} alt="" className='botavatar'/>
            </a>
            <h1 className='cx-bot-title' >CodeX</h1>
        </div>
            <div className='navbar-items'>
            <a className='navbar-item' href='/commands'>Commands</a>
            <a className='navbar-item' href='https://discord.gg/BAeqndHdea'>Support Server</a>
            <a className='navbar-item' href='features'>Features</a>
                <Link to='/login'>
                <button className='login-button'><p className='login-btn-name'>Login</p></button></Link>
            </div>
    </header>
    </div>
  )
}

export default Navbar