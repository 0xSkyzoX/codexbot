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
        <img alt='' src='./images/x.png' width='35px' style={{display: "flex", marginLeft: "auto", marginRight: "8px", marginTop: "8px"}} onClick={() => {closeSidebar()}}></img>
        <div className='sidebar-items'>

          <p className='sidebar-item'><img alt="" src='./images/features.png' className='sidebar-item-icon' /><a href='./features'>Features</a></p>
          <p className='sidebar-item'><img alt="" src='./images/commands.png' className='sidebar-item-icon' /><a href='./commands'>Commands</a></p>
          <p className='sidebar-item'><img alt="" src='./images/i.png' className='sidebar-item-icon' /><a href='https://discord.gg/BAeqndHdea'>Support Server</a></p>
        </div>
      </div>
      <header className='navbar' style={{display: "flex"}}>
      
        <div style={{display: "flex"}}>
          <img alt="" className="sidebar-icon" onClick={() => {document.getElementById('sidebar').classList.remove('inactive')}} src='./images/menu2.png' width='40px' height='40px'></img>
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